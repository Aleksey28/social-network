import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { InitialState } from '../../redux/users/reducer';

interface UsersProps extends InitialState {
  onPageChanged: any;
  follow: any;
  unfollow: any;
}

function Users (props: UsersProps): JSX.Element {

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
  const handleClickOnPage = (i: any) => {
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
}

export default Users;
