const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
  users: [],
  usersCount: 20,
  pageSize: 5,
  currentPage: 0
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
    default:
      return state;
  }
};

const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
const setUsersCountAC = (usersCount) => ({
  type: SET_USERS_COUNT,
  usersCount,
});
const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export default usersReducer;

export {
  followAC,
  unfollowAC,
  setUsersAC,
  setUsersCountAC,
  setCurrentPageAC
};
