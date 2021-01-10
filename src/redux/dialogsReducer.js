const ADD_MESSAGE = "ADD-MESSAGE";
const SET_VALUE_NEW_MESSAGE = "SET-VALUE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SET_VALUE_NEW_MESSAGE:
      state.valueNewMessage = action.value;
      return state;
    case ADD_MESSAGE:
      const newMessage = {
        id: 7,
        message: state.valueNewMessage,
        ownerId: 1,
      };
      state.messagesData.push(newMessage);
      state.valueNewMessage = "";
      return state;
    default:
      return state;
  }
};

const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

const setValueNewMessageActionCreator = (value) => ({
  type: SET_VALUE_NEW_MESSAGE,
  value,
});

export default dialogsReducer;

export {
  setValueNewMessageActionCreator,
  addMessageActionCreator,
};
