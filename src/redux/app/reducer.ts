import { authorize } from '../auth/reducer';
import { BaseThunkType, BaseActionType } from '../redux-store';

export type InitialState = typeof initialState;
export type ThunkType = BaseThunkType<ActionsType>
type ActionsType = BaseActionType<typeof actions>;

const initialState = {
  initialized: false,
};


const reducer = (state = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case 'social-network/app/SET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const actions = {
  setInitialized: () => ({ type: 'social-network/app/SET_INITIALIZED' } as const),
};

export const initializing = (): ThunkType => async (dispatch) => {
  try {
    await dispatch(authorize());
    dispatch(actions.setInitialized());
  }
  catch (error) {
    if (typeof error === 'string')
      throw Error(error);
  }
};

export default reducer;
