import { authorize } from '../auth/reducer';
import { AppStateType } from '../redux-store';
import { ThunkAction } from 'redux-thunk';

export type InitialState = typeof initialState;
type Actions = SetInitialized;
type Thunk = ThunkAction<Promise<void>, AppStateType, any, Actions>

interface SetInitialized {
  type: typeof SET_INITIALIZED;
}

const SET_INITIALIZED = 'social-network/app/SET_INITIALIZED';

const initialState = {
  initialized: false,
};


const reducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const setInitialized = (): SetInitialized => ({
  type: SET_INITIALIZED,
});

export const initializing = (): Thunk => async (dispatch) => {
  try {
    await dispatch(authorize());
    dispatch(setInitialized());
  }
  catch (error) {
    throw Error(error);
  }
};

export default reducer;
