import { authorize } from '../auth/reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';
const initialState = {
  initialized: false,
};

const reducer = ( state = initialState, action ) => {
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

const setInitialized = () => ({
  type: SET_INITIALIZED,
});

const initializing = () => async ( dispatch ) => {
  try {
    await dispatch( authorize() );
    dispatch( setInitialized() );
  } catch (error) {
    throw Error( error );
  }
};

export default reducer;

export {
  initializing,
};
