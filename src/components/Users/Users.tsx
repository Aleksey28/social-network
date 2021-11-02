import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { InitialState as UsersInitialState, UserFiltersType } from '../../redux/users/reducer';
import SearchUsersForm from './SearchUsersForm';

interface Props extends UsersInitialState {
  onPageChanged: (i: number) => void;
  onSearch: (filters: UserFiltersType) => void;
  follow: (id: string) => void;
  unfollow: (id: string) => void;
}

const Users: React.FC<Props> = (props) => {
  const {
          users,
          usersCount,
          pageSize,
          currentPage,
          isFetching,
          isTogglingFollowUsers,
          filters,
          onPageChanged,
          onSearch,
          follow,
          unfollow,
        } = props;

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
