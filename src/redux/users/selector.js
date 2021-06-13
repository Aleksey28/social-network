export const getUsersState = ( state ) => {
  return state.usersPage.users;
};
export const getUsersCountState = ( state ) => {
  return state.usersPage.usersCount;
};
export const getPageSizeState = ( state ) => {
  return state.usersPage.pageSize;
};
export const getCurrentPageState = ( state ) => {
  return state.usersPage.currentPage;
};
export const getIsFetchingState = ( state ) => {
  return state.usersPage.isFetching;
};
export const getIsTogglingFollowUsersState = ( state ) => {
  return state.usersPage.isTogglingFollowUsers;
};
