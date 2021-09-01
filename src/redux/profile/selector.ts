import { AppStateType } from '../redux-store';

export const getUserInfoState   = (state: AppStateType) => state.profilePage.userInfo;
export const getUserStatusState = (state: AppStateType) => state.profilePage.userStatus;
export const getPostsData       = (state: AppStateType) => state.profilePage.postsData;
