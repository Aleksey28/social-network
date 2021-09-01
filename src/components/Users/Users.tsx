import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { InitialState as UsersInitialState } from '../../redux/users/reducer';

interface Props extends UsersInitialState {
  onPageChanged: (i: number) => void;
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
          onPageChanged,
          follow,
          unfollow,
        } = props;

  const countPages        = usersCount / pageSize;
  const handleClickOnPage = (i: number) => {
    onPageChanged(i);
  };

  return (
    isFetching
    ? <Preloader/>
    : <div>
      <Paginator currentItem={currentPage} totalItemsCount={countPages} onClick={handleClickOnPage}/>
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
    </div>
  );
};

export default Users;
