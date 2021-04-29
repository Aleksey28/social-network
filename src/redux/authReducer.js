const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  email: '',
  login: '',
  userId: '',
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return  {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
};

const setUserData = ({email, login, userId}) => ({
  type: SET_USER_DATA,
  data: {email, login, userId}
})

export default authReducer;

export {
  setUserData
};
