const ADD_MESSAGE = "ADD-MESSAGE";
const SET_VALUE_NEW_MESSAGE = "SET-VALUE-NEW-MESSAGE";

const initialState = {
    dialogsData: [
      {
        id: 1,
        name: "Pety",
        ownerId: 2,
      },
      {
        id: 2,
        name: "Vany",
        ownerId: 3,
      },
      {
        id: 3,
        name: "Sasha",
        ownerId: 4,
      },
    ],
    messagesData: [
      {
        id: 1,
        message: "Hello",
        ownerId: 1,
      },
      {
        id: 2,
        message: "How are you",
        ownerId: 2,
      },
      {
        id: 3,
        message: "Buy",
        ownerId: 2,
      },
    ],
    valueNewMessage: "",
};

const dialogsReducer = (state = initialState, action) => {
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
