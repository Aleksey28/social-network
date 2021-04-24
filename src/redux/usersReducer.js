const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
  users: [],
  usersCount: 20,
  pageSize: 5,
  currentPage: 0,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u),
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
    default:
      return state;
  }
};

const follow = (userId) => ({
  type: FOLLOW,
  userId,
});
const unfollow = (userId) => ({
  type: UNFOLLOW,
  userId,
});
const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
const setUsersCount = (usersCount) => ({
  type: SET_USERS_COUNT,
  usersCount,
});
const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching
})

export default usersReducer;

export {
  follow,
  unfollow,
  setUsers,
  setUsersCount,
  setCurrentPage,
  setIsFetching,
};
