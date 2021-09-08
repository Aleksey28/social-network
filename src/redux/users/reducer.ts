import usersAPI from '../../api/usersAPI';
import { updateObjectInArray } from '../../utils/helpers';
import { User } from '../../types';
import { AppStateType } from '../redux-store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosResponse } from 'axios';
import { ApiResponse } from '../../api/api';

export type InitialState = typeof initialState;
type Actions =
  SetFollow
  | SetUnfollow
  | SetUsers
  | SetUsersCount
  | SetCurrentPage
  | SetIsFetching
  | SetIsTogglingFollow;
type Thunk = ThunkAction<Promise<void>, AppStateType, unknown, Actions>;

interface SetFollow {
  type: typeof FOLLOW;
  userId: string;
}

interface SetUnfollow {
  type: typeof UNFOLLOW;
  userId: string;
}

interface SetUsers {
  type: typeof SET_USERS;
  users: Array<any>;
}

interface SetUsersCount {
  type: typeof SET_USERS_COUNT;
  usersCount: number;
}

interface SetCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
}

interface SetIsFetching {
  type: typeof SET_IS_FETCHING;
  isFetching: boolean;
}

interface SetIsTogglingFollow {
  type: typeof SET_IS_TOGGLING_FOLLOW_USERS;
  userId: string;
  isFetching: boolean;
}

const FOLLOW                       = 'social-network/users/FOLLOW';
const UNFOLLOW                     = 'social-network/users/UNFOLLOW';
const SET_USERS                    = 'social-network/users/SET_USERS';
const SET_USERS_COUNT              = 'social-network/users/SET_USERS_COUNT';
const SET_CURRENT_PAGE             = 'social-network/users/SET_CURRENT_PAGE';
const SET_IS_FETCHING              = 'social-network/users/SET_IS_FETCHING';
const SET_IS_TOGGLING_FOLLOW_USERS = 'social-network/users/SET_IS_TOGGLING_FOLLOW_USERS';

const initialState = {
  users:                 [] as Array<User>,
  usersCount:            20,
  pageSize:              5,
  currentPage:           0,
  isFetching:            false,
  isTogglingFollowUsers: [] as Array<string>,
};

const reducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId, { followed: false }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.usersCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_IS_TOGGLING_FOLLOW_USERS:
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

const setFollow = (userId: string): SetFollow => ({
  type: FOLLOW,
  userId,
});

const setUnfollow = (userId: string): SetUnfollow => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = (users: Array<User>): SetUsers => ({
  type: SET_USERS,
  users,
});

export const setUsersCount = (usersCount: number): SetUsersCount => ({
  type: SET_USERS_COUNT,
  usersCount,
});

const setCurrentPage = (currentPage: number): SetCurrentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setIsFetching = (isFetching: boolean): SetIsFetching => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export const setIsTogglingFollow = (userId: string, isFetching: boolean): SetIsTogglingFollow => ({
  type: SET_IS_TOGGLING_FOLLOW_USERS,
  userId,
  isFetching,
});

export const getUsers = (page: number, pageSize: number): Thunk => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    const { data } = await usersAPI.getUsers(page + 1, pageSize);

    dispatch(setCurrentPage(page));
    dispatch(setUsersCount(data.totalCount));
    dispatch(setUsers(data.items));
  }
  catch (error) {
    console.log(error);
  }
  finally {
    dispatch(setIsFetching(false));
  }
};

const toggleFollow = async (
  userId: string,
  dispatch: Dispatch<Actions>,
  actionCreator: (userId: string) => SetFollow | SetUnfollow,
  apiMethod: (userId: string) => Promise<AxiosResponse<ApiResponse>>
): Promise<void> => {
  dispatch(setIsTogglingFollow(userId, true));
  try {
    const { data } = await apiMethod(userId);

    if (data.resultCode === 1) {
      throw new Error(data.messages[0]);
    }

    dispatch(actionCreator(userId));
  }
  catch (error) {
    console.log(error);
  }
  finally {
    dispatch(setIsTogglingFollow(userId, false));
  }
};

export const follow = (id: string): Thunk => async (dispatch) => toggleFollow(
  id,
  dispatch,
  setFollow,
  usersAPI.follow.bind(usersAPI),
);

export const unfollow = (id: string): Thunk => async (dispatch) => toggleFollow(
  id,
  dispatch,
  setUnfollow,
  usersAPI.unfollow.bind(usersAPI),
);

export default reducer;
