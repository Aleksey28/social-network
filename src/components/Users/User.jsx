import { NavLink } from 'react-router-dom';
import emptyAvatar from '../../images/empty_avatar.svg';
import classes from './User.module.css';
import React from 'react';

const User = ( { id, name, status, photos, followed, isTogglingFollowUsers, follow, unfollow } ) => {
  return (
    <div>
      <div>
        <NavLink to={ `/profile/${ id }` }>
          <img src={ photos.small || emptyAvatar } alt="avatar" className={ classes.avatar }/>
        </NavLink>
        { !followed
          ? <button disabled={ isTogglingFollowUsers.some( togglingId => togglingId === id ) }
                    onClick={ () => {follow( id );} }>Follow</button>
          : <button disabled={ isTogglingFollowUsers.some( togglingId => togglingId === id ) }
                    onClick={ () => {unfollow( id );} }>Unfollow</button> }
      </div>
      <div>
        <div>
          <p>{ name }</p>
          <p>{ status }</p>
        </div>
      </div>
    </div>
  );
};

export default User;
