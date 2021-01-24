const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      avatar: "https://sun9-32.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=1440x2160&quality=96&proxy=1&sign=8cd83def1f42c508f1c64c607f5504fd&type=album",
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
      avatar: "https://sun9-32.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=1440x2160&quality=96&proxy=1&sign=8cd83def1f42c508f1c64c607f5504fd&type=album",
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
      avatar: "https://sun9-32.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=1440x2160&quality=96&proxy=1&sign=8cd83def1f42c508f1c64c607f5504fd&type=album",
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
const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;

export {
  followAC,
  unfollowAC,
  setUsersAC,
};
