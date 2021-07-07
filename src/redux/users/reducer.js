import usersAPI from '../../api/usersAPI';
import { updateObjectInArray } from '../../utils/helpers';

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_USERS_COUNT = 'social-network/users/SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'social-network/users/SET_IS_FETCHING';
const SET_IS_TOGGLING_FOLLOW_USERS = 'social-network/users/SET_IS_TOGGLING_FOLLOW_USERS';

const initialState = {
  users: [],
  usersCount: 20,
  pageSize: 5,
  currentPage: 0,
  isFetching: false,
  isTogglingFollowUsers: [],
};

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray( state.users, 'id', action.userId, { followed: true } ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray( state.users, 'id', action.userId, { followed: false } ),
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
                               : state.isTogglingFollowUsers.filter( id => id !== action.userId ),
      };
    default:
      return state;
  }
};

const setFollow = ( userId ) => ({
  type: FOLLOW,
  userId,
});

const setUnfollow = ( userId ) => ({
  type: UNFOLLOW,
  userId,
});

const setUsers = ( users ) => ({
  type: SET_USERS,
  users,
});

const setUsersCount = ( usersCount ) => ({
  type: SET_USERS_COUNT,
  usersCount,
});

const setCurrentPage = ( currentPage ) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

const setIsFetching = ( isFetching ) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

const setIsTogglingFollow = ( userId, isFetching ) => ({
  type: SET_IS_TOGGLING_FOLLOW_USERS,
  userId,
  isFetching,
});

const getUsers = ( page, pageSize ) => async ( dispatch ) => {
  dispatch( setIsFetching( true ) );
  try {
    const data = await usersAPI.getUsers( page + 1, pageSize );

    dispatch( setUsersCount( data.totalCount ) );
    dispatch( setUsers( data.items ) );
  } catch (error) {
    console.log( error );
  } finally {
    dispatch( setIsFetching( false ) );
  }
};

const toggleFollow = async ( userId, dispatch, actionCreator, apiMethod ) => {
  dispatch( setIsTogglingFollow( userId, true ) );
  try {
    const data = await apiMethod( userId );

    if ( data.resultCode === 1 )
      throw new Error( data.messages[0] );

    dispatch( actionCreator( userId ) );
  } catch (error) {
    console.log( error );
  } finally {
    dispatch( setIsTogglingFollow( userId, false ) );
  }
};

const follow = ( id ) => async ( dispatch ) => toggleFollow(
  id,
  dispatch,
  setFollow,
  usersAPI.follow.bind( usersAPI ),
);

const unfollow = ( id ) => async ( dispatch ) => toggleFollow(
  id,
  dispatch,
  setUnfollow,
  usersAPI.unfollow.bind( usersAPI ),
);

export default reducer;

export {
  follow,
  unfollow,
  setUsers,
  setUsersCount,
  setCurrentPage,
  setIsFetching,
  setIsTogglingFollow,
  getUsers,
};
