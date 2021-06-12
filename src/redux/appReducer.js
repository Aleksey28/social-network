const SET_INITIALIZED = 'SET_INITIALIZED';
const initialState = {
  initialized: false,
};
const appReducer = ( state = initialState, action ) => {
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
const initializing = () => ({
  type: SET_INITIALIZED,
});

export default appReducer;

export {
  initializing,
};
