const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  dialogsData: [
    {
      id: 11,
      name: 'Pety',
      ownerId: 2,
    },
    {
      id: 12,
      name: 'Vany',
      ownerId: 3,
    },
    {
      id: 13,
      name: 'Sasha',
      ownerId: 4,
    },
  ],
  messagesData: [
    {
      id: 1,
      message: 'Hello',
      ownerId: 1,
    },
    {
      id: 2,
      message: 'How are you',
      ownerId: 2,
    },
    {
      id: 3,
      message: 'Buy',
      ownerId: 2,
    },
  ],
};

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 7, message: action.newMessage, ownerId: 1 }],
      };
    }
    default:
      return state;
  }
};

const sendMessage = ( { newMessage } ) => ({
  type: SEND_MESSAGE,
  newMessage,
});

export default reducer;

export {
  sendMessage,
};
