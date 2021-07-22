import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

function Users( {
  users,
  usersCount,
  pageSize,
  currentPage,
  isFetching,
  isTogglingFollowUsers,
  onPageChanged,
  follow,
  unfollow,
} ) {

  const countPages = usersCount / pageSize;
  const handleClickOnPage = ( i ) => {
    onPageChanged( i );
  };

  return (
    isFetching
    ? <Preloader/>
    : <div>
      <Paginator currentItem={ currentPage } totalItemsCount={ countPages } onClick={ handleClickOnPage }/>
      <ul>
        {
          users.map( ( userData ) => (
            <li key={ userData.id }>
              <User { ...userData }
                    isTogglingFollowUsers={ isTogglingFollowUsers }
                    follow={ follow }
                    unfollow={ unfollow }/>
            </li>
          ) )
        }
      </ul>
    </div>
  );
}

export default Users;
