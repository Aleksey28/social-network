import { AppStateType } from '../redux-store';

export const getEmailState      = (state: AppStateType) => state.auth.email;
export const getLoginState      = (state: AppStateType) => state.auth.login;
export const getUserIdState     = (state: AppStateType) => state.auth.userId;
export const getIsAuthState     = (state: AppStateType) => state.auth.isAuth;
export const getCaptchaUrlState = (state: AppStateType) => state.auth.captchaUrl;
