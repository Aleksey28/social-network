import React from 'react';
import classes from './User.module.css';
import emptyAvatar from '../../images/empty_avatar.svg';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

function Users( {
  users,
  usersCount,
  pageSize,
  currentPage,
  isFetching,
  isTogglingFollowUsers,
  onPageChange,
  setCurrentPage,
  toggleFollow,
} ) {

  const countPages = usersCount / pageSize;
  const pagesBar = [];

  for ( let i = 0; i < countPages; i++ ) {
    pagesBar.push(
      <li
        key={ i }
        className={ `${ classes.pages__item } ${ currentPage === i
                                                 ? classes.pages__item_selected
                                                 : undefined }` }
        onClick={ _ => {
          setCurrentPage( i );
          onPageChange( i );
        } }>
        { i + 1 }
      </li>,
    );
  }

  return (
    isFetching
    ? <Preloader/>
    : <div>
      <nav>
        <ul className={ classes.pages }>
          { pagesBar }
        </ul>
      </nav>
      <ul>
        {
          users.map( u => (
            <li key={ u.id }>
              <div>
                <NavLink to={ `/profile/${ u.id }` }>
                  <img src={ u.photos.small || emptyAvatar } alt="avatar" className={ classes.avatar }/>
                </NavLink>
                { u.followed
                  ? <button disabled={ isTogglingFollowUsers.some( id => id === u.id ) }
                            onClick={ () => {toggleFollow( u.id );} }>Follow</button>
                  : <button disabled={ isTogglingFollowUsers.some( id => id === u.id ) }
                            onClick={ () => {toggleFollow( u.id );} }>Unfollow</button> }
              </div>
              <div>
                <div>
                  <p>{ u.name }</p>
                  <p>{ u.status }</p>
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
