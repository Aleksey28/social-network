import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import emptyAvatar from '../../../images/empty_avatar.svg';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = ( { isOwner, userInfo, userStatus, updateUserStatus, updateUserPhoto } ) => {
  const { photos, fullName, aboutMe } = userInfo || {};

  const handleChangePhoto = ( e ) => {
    if ( e.target.files.length ) {
      updateUserPhoto( e.target.files[0] );
    }
  };

  return (
    userInfo
    ? <div>
      <img
        src="https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"
        alt="машина"/>
      <div>
        <img className={ classes.info__avatar } src={ photos.large || emptyAvatar } alt="Avatar"/>
        { isOwner && <input type="file" onChange={ handleChangePhoto }/> }
        <ProfileStatus status={ userStatus } updateUserStatus={ updateUserStatus }/>
        <p>{ fullName }</p>
        <p>{ aboutMe }</p>
      </div>
    </div>
    : <Preloader/>
  );
};

export default ProfileInfo;
