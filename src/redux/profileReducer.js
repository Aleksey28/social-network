const ADD_POST = "ADD-POST";
const SET_VALUE_NEW_POST = "SET-VALUE-NEW-POST";

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
    default:
      return state;
  }
};

const addPostActionCreator = () => ({
  type: ADD_POST,
});
const setValueNewPostActionCreator = (value) => ({
  type: SET_VALUE_NEW_POST,
  value,
});

export default profileReducer;

export {
  addPostActionCreator,
  setValueNewPostActionCreator,
};
