import { FormAction, stopSubmit } from 'redux-form';
import securityAPI, { ResultCodeCaptcha } from '../../api/securityAPI';
import { LoginPropsType } from '../../types';
import { AppStateType, InferValueTypes } from '../redux-store';
import { ThunkAction } from 'redux-thunk';
import { ResultCode } from '../../api/api';
import authApi from '../../api/authApi';

export type InitialState = typeof initialState;
export type Thunk = ThunkAction<Promise<void>, AppStateType, unknown, Actions | FormAction>
type Actions = ReturnType<InferValueTypes<typeof actions>>;

interface UserData {
  email: null | string;
  login: null | string;
  userId: null | string;
  isAuth: boolean;
}

const initialState = {
  email:      '' as null | string,
  login:      '' as null | string,
  userId:     '' as null | string,
  isAuth:     false as null | boolean,
  captchaUrl: null as null | string,
};

const reducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
      };
    case 'SET_CAPTCHA_URL':
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    default:
      return state;
  }
};

export const actions = {
  setUserData:   ({ email, login, userId, isAuth }: UserData) => ({
    type: 'SET_USER_DATA',
    data: { email, login, userId, isAuth },
  } as const),
  setCaptchaUrl: (url: string) => ({ type: 'SET_CAPTCHA_URL', captchaUrl: url } as const)
};


export const authorize = (): Thunk => async (dispatch) => {
  try {
    const { data } = await authApi.auth();

    if (data.resultCode === ResultCode.Error) {
      throw new Error(data.messages[0]);
    }

    const { email, login, id: userId } = data.data;

    dispatch(actions.setUserData({ email, login, userId, isAuth: true }));
  }
  catch (error) {
    console.log(error);
  }
};

export const login = ({ email, password, rememberMe, captcha = null }: LoginPropsType): Thunk => async (dispatch) => {
  try {
    const { data } = await authApi.login({ email, password, rememberMe, captcha });

    if (data.resultCode === ResultCode.Success) {
      dispatch(authorize());
    }
    else if (data.resultCode === ResultCodeCaptcha.Captcha) {
      dispatch(getCaptcha());
    }
    else {
      throw new Error(data.messages[0]);
    }
  }
  catch (error) {
    dispatch(stopSubmit('login', { _error: error.message }));
  }
};

export const logout = (): Thunk => async (dispatch) => {
  try {
    const { data }                 = await authApi.logout();
    const { resultCode, messages } = data;

    if (resultCode === ResultCode.Success) {
      dispatch(actions.setUserData({ email: null, login: null, userId: null, isAuth: false }));
    }
    else {
      throw new Error(messages[0]);
    }
  }
  catch (error) {
    console.log(error);
  }
};

export const getCaptcha = (): Thunk => async (dispatch) => {
  try {
    const { data: { url } } = await securityAPI.getCaptcha();

    if (url) {
      dispatch(actions.setCaptchaUrl(url));
    }
    else {
      throw new Error('Error with captcha');
    }
  }
  catch (error) {
    console.log(error);
  }
};

export default reducer;
