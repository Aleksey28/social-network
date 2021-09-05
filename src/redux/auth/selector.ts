import { AppStateType } from '../redux-store';

export const getEmailState      = (state: AppStateType): string => state.auth.email || '';
export const getLoginState      = (state: AppStateType): string => state.auth.login || '';
export const getUserIdState     = (state: AppStateType): string => state.auth.userId || '';
export const getIsAuthState     = (state: AppStateType): boolean => state.auth.isAuth || false;
export const getCaptchaUrlState = (state: AppStateType): string => state.auth.captchaUrl || '';
