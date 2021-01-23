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
      const newPost = {
        id: 5,
        message: state.valueNewPost,
      };

      const newState = {
        ...state,
        postsData: [...state.postsData],
      };
      newState.postsData.push(newPost);
      newState.valueNewPost = "";
      return newState;
    }
    case SET_VALUE_NEW_POST: {
      const newState = { ...state };
      newState.valueNewPost = action.value;
      return newState;
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
