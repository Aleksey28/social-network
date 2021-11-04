import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserFiltersType } from '../../redux/users/reducer';
import SearchUsersForm from './SearchUsersForm';
import { useSelector } from 'react-redux';
import {
  getCurrentPageState,
  getFilters,
  getIsFetchingState,
  getIsTogglingFollowUsersState,
  getPageSizeState,
  getUsersCountState,
  getUsersState,
} from '../../redux/users/selector';

interface Props {
  onPageChanged: (i: number) => void;
  onSearch: (filters: UserFiltersType) => void;
  follow: (id: string) => void;
  unfollow: (id: string) => void;
}

const Users: React.FC<Props> = (props) => {
  const {
          onPageChanged,
          onSearch,
          follow,
          unfollow,
        } = props;

  const users                 = useSelector(getUsersState);
  const usersCount            = useSelector(getUsersCountState);
  const currentPage           = useSelector(getCurrentPageState);
  const pageSize              = useSelector(getPageSizeState);
  const filters               = useSelector(getFilters);
  const isTogglingFollowUsers = useSelector(getIsTogglingFollowUsersState);
  const isFetching            = useSelector(getIsFetchingState);


  const countPages        = usersCount / pageSize;
  const handleClickOnPage = (i: number) => {
    onPageChanged(i);
  };

  return (
    <div>
      <SearchUsersForm onSearch={onSearch} filters={filters}/>
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
                       follow={follow}
                       unfollow={unfollow}/>
               </li>
             ))
           }
         </ul>
       </div>}
    </div>
  );
};

export default Users;
