import usersAPI from '../../api/usersAPI';
import { updateObjectInArray } from '../../utils/helpers';
import { UserType } from '../../types';
import { AppStateType, InferValueTypes } from '../redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';
import { ApiResponse, ResultCode } from '../../api/api';

export type InitialState = typeof initialState;
type Thunk = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = {
  users:                 [] as Array<UserType>,
  usersCount:            20,
  pageSize:              5,
  currentPage:           0,
  isFetching:            false,
  isTogglingFollowUsers: [] as Array<string>,
};

const reducer = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: true }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: false }),
      };
    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      };
    case 'SET_USERS_COUNT':
      return {
        ...state,
        usersCount: action.usersCount,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'SET_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'SET_IS_TOGGLING_FOLLOW_USERS':
      return {
        ...state,
        isTogglingFollowUsers: action.isFetching
                               ? [...state.isTogglingFollowUsers, action.userId]
                               : state.isTogglingFollowUsers.filter(id => id !== action.userId),
      };
    default:
      return state;
  }
};

export const actions = {
  setFollow:           (userId: string) => ({ type: 'FOLLOW', userId, } as const),
  setUnfollow:         (userId: string) => ({ type: 'UNFOLLOW', userId, } as const),
  setUsers:            (users: Array<UserType>) => ({ type: 'SET_USERS', users, } as const),
  setUsersCount:       (usersCount: number) => ({ type: 'SET_USERS_COUNT', usersCount, } as const),
  setCurrentPage:      (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage, } as const),
  setIsFetching:       (isFetching: boolean) => ({ type: 'SET_IS_FETCHING', isFetching, } as const),
  setIsTogglingFollow: (userId: string, isFetching: boolean) => ({
    type: 'SET_IS_TOGGLING_FOLLOW_USERS',
    userId,
    isFetching,
  } as const),
};

export const getUsers = (page: number, pageSize: number): Thunk => async (dispatch) => {
  dispatch(actions.setIsFetching(true));
  try {
    const { data } = await usersAPI.getUsers(page + 1, pageSize);

    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setUsersCount(data.totalCount));
    dispatch(actions.setUsers(data.items));
  }
  catch (error) {
    console.log(error);
  }
  finally {
    dispatch(actions.setIsFetching(false));
  }
};

const toggleFollow = async (
  userId: string,
  dispatch: Dispatch<ActionTypes>,
  actionCreator: (userId: string) => ActionTypes,
  apiMethod: (userId: string) => Promise<AxiosResponse<ApiResponse>>
): Promise<void> => {
  dispatch(actions.setIsTogglingFollow(userId, true));
  try {
    const { data } = await apiMethod(userId);

    if (data.resultCode === ResultCode.Error) {
      throw new Error(data.messages[0]);
    }

    dispatch(actionCreator(userId));
  }
  catch (error) {
    console.log(error);
  }
  finally {
    dispatch(actions.setIsTogglingFollow(userId, false));
  }
};

export const follow = (id: string): Thunk => async (dispatch) => toggleFollow(
  id,
  dispatch,
  actions.setFollow,
  usersAPI.follow.bind(usersAPI),
);

export const unfollow = (id: string): Thunk => async (dispatch) => toggleFollow(
  id,
  dispatch,
  actions.setUnfollow,
  usersAPI.unfollow.bind(usersAPI),
);

export default reducer;
