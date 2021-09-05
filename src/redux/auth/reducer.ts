import profileAPI from "../../api/profileAPI";
import { stopSubmit } from "redux-form";
import securityAPI from "../../api/securityAPI";
import { LoginProps } from '../../types';

export type InitialState = typeof initialState;
type Action = SetUserData | SetCaptchaUrl;

interface UserData {
  email: null | string;
  login: null | string;
  userId: null | string;
  isAuth: boolean;
}

interface SetUserData {
  type: typeof SET_USER_DATA;
  data: UserData;
}

interface SetCaptchaUrl {
  type: typeof SET_CAPTCHA_URL;
  captchaUrl: string;
}

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const SET_CAPTCHA_URL = "social-network/auth/SET_CAPTCHA_URL";

const initialState = {
  email: "" as null | string,
  login: "" as null | string,
  userId: "" as null | string,
  isAuth: false as null | boolean,
  captchaUrl: null as null | string,
};

const reducer = (state = initialState, action: Action): InitialState => {
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

const setUserData = ({ email, login, userId, isAuth }: UserData): SetUserData => ({
  type: SET_USER_DATA,
  data: { email, login, userId, isAuth },
});

const setCaptchaUrl = (url: string): SetCaptchaUrl => ({
  type: SET_CAPTCHA_URL,
  captchaUrl: url,
});

export const authorize = () => async (dispatch: any): Promise<void> => {
  try {
    const data = await profileAPI.auth();

    if (data.resultCode === 1) {
      throw new Error(data.messages[0]);
    }

    const { email, login, id: userId } = data.data;

    dispatch(setUserData({ email, login, userId, isAuth: true }));
  } catch (error) {
    console.log(error);
  }
};

export const login = ({ email, password, rememberMe, captcha = null }: LoginProps) => async (dispatch: any): Promise<void> => {
  try {
    const { data } = await profileAPI.login({ email, password, rememberMe, captcha });

    if (data.resultCode === 0) {
      dispatch(authorize());
    } else if (data.resultCode === 10) {
      dispatch(getCaptcha());
    } else {
      throw new Error(data.messages[0]);
    }
  } catch (error) {
    dispatch(stopSubmit("login", { _error: error.message }));
  }
};

export const logout = () => async (dispatch: any): Promise<void> => {
  try {
    const { data } = await profileAPI.logout();
    const { resultCode, messages } = data;

    if (resultCode === 0) {
      dispatch(setUserData({ email: null, login: null, userId: null, isAuth: false }));
    } else {
      throw new Error(messages[0]);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCaptcha = () => async (dispatch: any): Promise<void> => {
  try {
    const { url } = await securityAPI.getCaptcha();

    if (url) {
      dispatch(setCaptchaUrl(url));
    } else {
      throw new Error("Error with captcha");
    }
  } catch (error) {
    console.log(error);
  }
};

export default reducer;
