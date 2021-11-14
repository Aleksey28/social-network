import React, { useEffect } from 'react';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { follow, getUsers, unfollow, UserFiltersType } from '../../redux/users/reducer';
import SearchUsersForm from './SearchUsersForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentPageState,
  getFilters,
  getIsFetchingState,
  getIsTogglingFollowUsersState,
  getPageSizeState,
  getUsersCountState,
  getUsersState,
} from '../../redux/users/selector';

const UsersPage: React.FC = () => {
  const dispatch = useDispatch();

  const users                 = useSelector(getUsersState);
  const usersCount            = useSelector(getUsersCountState);
  const currentPage           = useSelector(getCurrentPageState);
  const pageSize              = useSelector(getPageSizeState);
  const currentFilters        = useSelector(getFilters);
  const isTogglingFollowUsers = useSelector(getIsTogglingFollowUsersState);
  const isFetching            = useSelector(getIsFetchingState);

  const loadUsers = async (page = currentPage, filters = currentFilters) => {
    await dispatch(getUsers(page, pageSize, filters));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {

  }, [currentPage, currentFilters])

  const countPages        = usersCount / pageSize;
  const handleClickOnPage = (i: number) => loadUsers(i);
  const handleSearch      = (filters: UserFiltersType) => loadUsers(0, filters);
  const handleFollow      = (id: string) => dispatch(follow(id));
  const handleUnfollow    = (id: string) => dispatch(unfollow(id));

  return (
    <div>
      <SearchUsersForm onSearch={handleSearch} filters={currentFilters}/>
      {isFetching
       ? <Preloader/>
       : <div>
         <Paginator currentPage={currentPage} totalPagesCount={countPages} onClick={handleClickOnPage}/>
         <ul>
           {
             users.map((userData) => (
               <li key={userData.id}>
                 <User {...userData}
                       isTogglingFollowUsers={isTogglingFollowUsers}
                       follow={handleFollow}
                       unfollow={handleUnfollow}/>
               </li>
             ))
           }
         </ul>
       </div>}
    </div>
  );
};

export default UsersPage;
