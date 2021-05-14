import usersAPI from '../api/usersAPI';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_TOGGLING_FOLLOW_USERS = 'SET_IS_TOGGLING_FOLLOW_USERS';

const initialState = {
  users: [],
  usersCount: 20,
  pageSize: 5,
  currentPage: 0,
  isFetching: false,
  isTogglingFollowUsers: [],
};

const usersReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => u.id === action.userId ? { ...u, followed: true } : u ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => u.id === action.userId ? { ...u, followed: false } : u ),
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

const follow = ( userId ) => ({
  type: FOLLOW,
  userId,
});

const unfollow = ( userId ) => ({
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

const getUsers = ( page, pageSize ) => ( dispatch ) => {
  dispatch( setIsFetching( true ) );
  usersAPI.getUsers( page + 1, pageSize )
    .then( data => {
      dispatch( setUsersCount( data.totalCount ) );
      dispatch( setUsers( data.items ) );
    } )
    .catch( console.log )
    .finally( () => {
      dispatch( setIsFetching( false ) );
    } );
};

const toggleFollow = ( id ) => ( dispatch ) => {
  dispatch( setIsTogglingFollow( id, true ) );
  if ( initialState.users.some( item => item.id !== id && item.followed ) )
    usersAPI.follow( id )
      .then( data => {
        if ( data.resultCode === 1 ) {
          throw new Error( data.messages[0] );
        }
        dispatch( follow( id ) );
      } )
      .catch( console.log )
      .finally( () => dispatch( setIsTogglingFollow( id, false ) ) )
  else
    usersAPI.unfollow( id )
      .then( data => {
        if ( data.resultCode === 1 ) {
          throw new Error( data.messages[0] );
        }
        dispatch( unfollow( id ) );
      } )
      .catch( console.log )
      .finally( () => dispatch( setIsTogglingFollow( id, false ) ) )
};

export default usersReducer;

export {
  follow,
  unfollow,
  setUsers,
  setUsersCount,
  setCurrentPage,
  setIsFetching,
  setIsTogglingFollow,
  getUsers,
  toggleFollow,
};
