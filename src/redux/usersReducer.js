const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Aleksey",
      status: "searching yourself",
      location: {
        city: "St.Petersburg",
        country: "Russia",
      },
      followed: true,
    },
    {
      id: 2,
      fullName: "Ivan",
      status: "searching yourself",
      location: {
        city: "Moscow",
        country: "Russia",
      },
      followed: false,
    },
    {
      id: 3,
      fullName: "Petr",
      status: "searching yourself",
      location: {
        city: "New York",
        country: "USA",
      },
      followed: true,
    },
  ],
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
const serUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;

export {
  followAC,
  unfollowAC,
  serUsersAC,
};
