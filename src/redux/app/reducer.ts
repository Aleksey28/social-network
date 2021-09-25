import { authorize } from '../auth/reducer';
import { AppStateType, InferValueTypes } from '../redux-store';
import { ThunkAction } from 'redux-thunk';

export type InitialState = typeof initialState;
export type Thunk = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
type ActionsType = ReturnType<InferValueTypes<typeof actions>>;

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

export const initializing = (): Thunk => async (dispatch) => {
  try {
    await dispatch(authorize());
    dispatch(actions.setInitialized());
  }
  catch (error) {
    throw Error(error);
  }
};

export default reducer;
