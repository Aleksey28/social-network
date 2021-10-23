import { AppStateType } from '../redux-store';

export const getUsersState                 = (state: AppStateType) => state.usersPage.users;
export const getUsersCountState            = (state: AppStateType) => state.usersPage.usersCount;
export const getPageSizeState              = (state: AppStateType) => state.usersPage.pageSize;
export const getCurrentPageState           = (state: AppStateType) => state.usersPage.currentPage;
export const getIsFetchingState            = (state: AppStateType) => state.usersPage.isFetching;
export const getIsTogglingFollowUsersState = (state: AppStateType) => state.usersPage.isTogglingFollowUsers;
export const getFilters                    = (state: AppStateType) => state.usersPage.filters;
