import { authorize } from "../auth/reducer";

const SET_INITIALIZED = "social-network/app/SET_INITIALIZED";

const initialState = {
  initialized: false,
};

type SetInitialized = {
  type: typeof SET_INITIALIZED;
}

export type InitialState = typeof initialState;

const reducer = (state = initialState, action: SetInitialized): InitialState => {
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

export const initializing = () => async (dispatch: any): Promise<void> => {
  try {
    await dispatch(authorize());
    dispatch(setInitialized());
  } catch (error) {
    throw Error(error);
  }
};

export default reducer;
