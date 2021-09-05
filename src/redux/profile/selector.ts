import { AppStateType } from '../redux-store';
import { Post, Profile } from '../../types';

export const getUserInfoState   = (state: AppStateType): Partial<Profile> => state.profilePage.userInfo || {};
export const getUserStatusState = (state: AppStateType): string => state.profilePage.userStatus;
export const getPostsData       = (state: AppStateType): Post[] => state.profilePage.postsData;
