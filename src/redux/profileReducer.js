const ADD_POST = "ADD_POST";
const SET_VALUE_NEW_POST = "SET_VALUE_NEW_POST";
const SET_USER_INFO = "SET_USER_INFO";

const initialState = {
  postsData: [
    {
      id: 1,
      message: "How are you?",
    },
    {
      id: 2,
      message: "It is my first post",
    },
  ],
  valueNewPost: "",
  userInfo: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        valueNewPost: "",
        postsData: [...state.postsData, { id: 5, message: state.valueNewPost }],
      };
    }
    case SET_VALUE_NEW_POST: {
      return {
        ...state,
        valueNewPost: action.value,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    default:
      return state;
  }
};

const addPost = () => ({
  type: ADD_POST,
});
const setValueNewPost = (value) => ({
  type: SET_VALUE_NEW_POST,
  value,
});
const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  userInfo
})

export default profileReducer;

export {
  addPost,
  setValueNewPost,
  setUserInfo,
};
