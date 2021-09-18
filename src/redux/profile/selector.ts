import { AppStateType } from '../redux-store';
import { PostType, ProfileType } from '../../types';

export const getUserInfoState   = (state: AppStateType): Partial<ProfileType> => state.profilePage.userInfo || {};
export const getUserStatusState = (state: AppStateType): string => state.profilePage.userStatus;
export const getPostsData       = (state: AppStateType): PostType[] => state.profilePage.postsData;
