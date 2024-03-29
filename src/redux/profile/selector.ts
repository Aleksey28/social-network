import { AppStateType } from '../redux-store';
import { PostType, ProfileType } from '../../types';

export const getUserInfoState   = (state: AppStateType): ProfileType => state.profilePage.userInfo;
export const getUserStatusState = (state: AppStateType): string => state.profilePage.userStatus;
export const getPostsData       = (state: AppStateType): PostType[] => state.profilePage.postsData;
export const getIsValid         = (state: AppStateType): boolean => state.profilePage.isValid;
