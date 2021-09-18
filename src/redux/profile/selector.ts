import { AppStateType } from '../redux-store';
import { Post, ProfileType } from '../../types';

export const getUserInfoState   = (state: AppStateType): Partial<ProfileType> => state.profilePage.userInfo || {};
export const getUserStatusState = (state: AppStateType): string => state.profilePage.userStatus;
export const getPostsData       = (state: AppStateType): Post[] => state.profilePage.postsData;
