import profileAPI from '../../api/profileAPI';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';

const initialState = {
  email: '',
  login: '',
  userId: '',
  isAuth: false,
};

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

const setUserData = ( { email, login, userId, isAuth } ) => ({
  type: SET_USER_DATA,
  data: { email, login, userId, isAuth },
});

const authorize = () => async ( dispatch ) => {
  try {
    const data = await profileAPI.auth();

    if ( data.resultCode === 1 ) {
      throw new Error( data.messages[0] );
    }

    const { email, login, id: userId } = data.data;

    dispatch( setUserData( { email, login, userId, isAuth: true } ) );
  } catch (error) {
    console.log( error );
  }
};

const login = ( { email, password, rememberMe } ) => async ( dispatch ) => {
  try {
    const { data } = await profileAPI.login( { email, password, rememberMe } );

    if ( data.resultCode === 1 ) {
      throw new Error( data.messages[0] );
    }

    dispatch( authorize() );
  } catch (error) {
    dispatch( stopSubmit( 'login', { _error: error.message } ) );
  }
};

const logout = () => async ( dispatch ) => {
  try {
    const data = await profileAPI.logout();

    if ( data.resultCode === 1 ) {
      throw new Error( data.messages[0] );
    }
    dispatch( setUserData( { email: null, login: null, userId: null, isAuth: false } ) );
  } catch (error) {
    console.log( error );
  }
};

export default reducer;

export {
  authorize,
  login,
  logout,
};
