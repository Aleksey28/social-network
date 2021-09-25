import { InferValueTypes } from '../redux-store';

export type InitialState = typeof initialState;
export type Actions = ReturnType<InferValueTypes<typeof actions>>;

const initialState = {
  dialogsData:  [
    {
      id:      11,
      name:    'Pety',
      ownerId: 2,
    },
    {
      id:      12,
      name:    'Vany',
      ownerId: 3,
    },
    {
      id:      13,
      name:    'Sasha',
      ownerId: 4,
    },
  ],
  messagesData: [
    {
      id:      1,
      message: 'Hello',
      ownerId: 1,
    },
    {
      id:      2,
      message: 'How are you',
      ownerId: 2,
    },
    {
      id:      3,
      message: 'Buy',
      ownerId: 2,
    },
  ],
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 7, message: action.newMessage, ownerId: 1 }],
      };
    }
    default:
      return state;
  }
};

export const actions = {
  sendMessage: (newMessage: string) => ({ type: 'SEND_MESSAGE', newMessage } as const)
};

export default reducer;
