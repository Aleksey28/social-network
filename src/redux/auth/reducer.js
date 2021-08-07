import profileAPI from '../../api/profileAPI';
import { stopSubmit } from 'redux-form';
import securityAPI from '../../api/securityAPI';

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'social-network/auth/SET_CAPTCHA_URL';

const initialState = {
  email: '',
  login: '',
  userId: '',
  isAuth: false,
  captchaUrl: null,
};

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

const setUserData = ( { email, login, userId, isAuth } ) => ({
  type: SET_USER_DATA,
  data: { email, login, userId, isAuth },
});

const setCaptchaUrl = ( url ) => ({
  type: SET_CAPTCHA_URL,
  captchaUrl: url,
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

    if ( data.resultCode === 0 ) {
      dispatch( authorize() );
    } else if ( data.resultCode === 10 ) {
      dispatch( getCaptcha() );
    } else {
      throw new Error( data.messages[0] );
    }
  } catch (error) {
    dispatch( stopSubmit( 'login', { _error: error.message } ) );
  }
};

const logout = () => async ( dispatch ) => {
  try {
    const data = await profileAPI.logout();

    if ( data.resultCode === 0 ) {
      dispatch( setUserData( { email: null, login: null, userId: null, isAuth: false } ) );
    } else {
      throw new Error( data.messages[0] );
    }
  } catch (error) {
    console.log( error );
  }
};

const getCaptcha = () => async ( dispatch ) => {
  try {
    const { url } = await securityAPI.getCaptcha();

    if ( url ) {
      dispatch( setCaptchaUrl( url ) );
    } else {
      throw new Error( 'Error with captcha' );
    }
  } catch (error) {
    console.log( error );
  }
};

export default reducer;

export {
  authorize,
  login,
  logout,
  getCaptcha,
};
