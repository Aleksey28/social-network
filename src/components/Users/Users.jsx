import React from 'react';
import classes from './User.module.css';
import emptyAvatar from '../../images/empty_avatar.svg';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';

function Users( {
  users,
  usersCount,
  pageSize,
  currentPage,
  isFetching,
  isTogglingFollowUsers,
  onPageChange,
  setCurrentPage,
  follow,
  unfollow,
} ) {

  const countPages = usersCount / pageSize;
  const handleClickOnPage = ( i ) => {
    setCurrentPage( i );
    onPageChange( i );
  };

  return (
    isFetching
    ? <Preloader/>
    : <div>
      <Paginator currentPage={ currentPage } countPages={ countPages } onClick={ handleClickOnPage }/>
      <ul>
        {
          users.map( ( { id, name, status, photos, followed } ) => (
            <li key={ id }>
              <div>
                <NavLink to={ `/profile/${ id }` }>
                  <img src={ photos.small || emptyAvatar } alt="avatar" className={ classes.avatar }/>
                </NavLink>
                { !followed
                  ? <button disabled={ isTogglingFollowUsers.some( id => id === id ) }
                            onClick={ () => {follow( id );} }>Follow</button>
                  : <button disabled={ isTogglingFollowUsers.some( id => id === id ) }
                            onClick={ () => {unfollow( id );} }>Unfollow</button> }
              </div>
              <div>
                <div>
                  <p>{ name }</p>
                  <p>{ status }</p>
                </div>
              </div>
            </li>
          ) )
        }
      </ul>
    </div>
  );
}

export default Users;
