const SEND_MESSAGE = "SEND-MESSAGE";
const SET_VALUE_NEW_MESSAGE = "SET-VALUE-NEW-MESSAGE";

const initialState = {
  dialogsData: [
    {
      id: 11,
      name: "Pety",
      ownerId: 2,
    },
    {
      id: 12,
      name: "Vany",
      ownerId: 3,
    },
    {
      id: 13,
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
    case SET_VALUE_NEW_MESSAGE: {
      return {
        ...state,
        valueNewMessage: action.value,
      };
    }
    case SEND_MESSAGE: {
      return {
        ...state,
        valueNewMessage: "",
        messagesData: [...state.messagesData, { id: 7, message: state.valueNewMessage, ownerId: 1 }],
      };
    }
    default:
      return state;
  }
};

const sendMessage = () => ({
  type: SEND_MESSAGE,
});

const setValueNewMessage = (value) => ({
  type: SET_VALUE_NEW_MESSAGE,
  value,
});

export default dialogsReducer;

export {
  setValueNewMessage,
  sendMessage,
};
