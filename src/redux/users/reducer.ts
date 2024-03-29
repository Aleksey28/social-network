import usersAPI from '../../api/usersAPI';
import { updateObjectInArray } from '../../utils/helpers';
import { UserType } from '../../types';
import { BaseActionType, BaseThunkType } from '../redux-store';
import { Dispatch } from 'redux';
import { ApiResponse, ResultCode } from '../../api/api';
import { FilterFriend } from '../../utils/enums';

export type InitialState = typeof initialState;
export type ThunkType = BaseThunkType<ActionsType>
type ActionsType = BaseActionType<typeof actions>;
export type UserFiltersType = InitialState['filters'];

const initialState = {
  users:                 [] as Array<UserType>,
  usersCount:            20,
  pageSize:              5,
  currentPage:           0,
  isFetching:            false,
  isTogglingFollowUsers: [] as Array<string>,
  filters:               {
    term:   '',
    friend: FilterFriend.AllUsers,
  },
};

const reducer = (state = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case 'social-network/users/FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: true }),
      };
    case 'social-network/users/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: false }),
      };
    case 'social-network/users/SET_USERS':
      return {
        ...state,
        users: action.users,
      };
    case 'social-network/users/SET_USERS_COUNT':
      return {
        ...state,
        usersCount: action.usersCount,
      };
    case 'social-network/users/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'social-network/users/SET_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case 'social-network/users/SET_IS_TOGGLING_FOLLOW_USERS':
      return {
        ...state,
        isTogglingFollowUsers: action.isFetching
                               ? [...state.isTogglingFollowUsers, action.userId]
                               : state.isTogglingFollowUsers.filter(id => id !== action.userId),
      };
    case 'social-network/profile/SET_FILTERS' : {
      return {
        ...state,
        filters: action.filters,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setFollow:           (userId: string) => ({ type: 'social-network/users/FOLLOW', userId } as const),
  setUnfollow:         (userId: string) => ({ type: 'social-network/users/UNFOLLOW', userId } as const),
  setUsers:            (users: Array<UserType>) => ({ type: 'social-network/users/SET_USERS', users } as const),
  setUsersCount:       (usersCount: number) => ({ type: 'social-network/users/SET_USERS_COUNT', usersCount } as const),
  setCurrentPage:      (currentPage: number) => ({
    type: 'social-network/users/SET_CURRENT_PAGE',
    currentPage,
  } as const),
  setIsFetching:       (isFetching: boolean) => ({
    type: 'social-network/users/SET_IS_FETCHING',
    isFetching,
  } as const),
  setIsTogglingFollow: (userId: string, isFetching: boolean) => ({
    type: 'social-network/users/SET_IS_TOGGLING_FOLLOW_USERS',
    userId,
    isFetching,
  } as const),
  setFilters:          (filters: UserFiltersType) => ({ type: 'social-network/profile/SET_FILTERS', filters } as const),
};

export const getUsers = (page: number, pageSize: number, filters: UserFiltersType): ThunkType => async (dispatch) => {
  dispatch(actions.setIsFetching(true));
  try {
    const { totalCount, items } = await usersAPI.getUsers(page + 1, pageSize, filters);

    dispatch(actions.setCurrentPage(page));
    dispatch(actions.setFilters(filters));
    dispatch(actions.setUsersCount(totalCount));
    dispatch(actions.setUsers(items));
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
  dispatch: Dispatch<ActionsType>,
  actionCreator: (userId: string) => ActionsType,
  apiMethod: (userId: string) => Promise<ApiResponse>,
): Promise<void> => {
  dispatch(actions.setIsTogglingFollow(userId, true));
  try {
    const { resultCode, messages } = await apiMethod(userId);

    if (resultCode === ResultCode.Error) {
      throw new Error(messages[0]);
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

export const follow = (id: string): ThunkType => async (dispatch) => toggleFollow(
  id,
  dispatch,
  actions.setFollow,
  usersAPI.follow.bind(usersAPI),
);

export const unfollow = (id: string): ThunkType => async (dispatch) => toggleFollow(
  id,
  dispatch,
  actions.setUnfollow,
  usersAPI.unfollow.bind(usersAPI),
);

export default reducer;
