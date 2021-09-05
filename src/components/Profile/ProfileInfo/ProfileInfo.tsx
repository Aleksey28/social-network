import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import emptyAvatar from '../../../images/empty_avatar.svg';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import { Profile } from '../../../types';

interface Props {
  isOwner: boolean;
  userInfo: Partial<Profile>;
  userStatus: string;
  updateUserStatus: (status: string) => any;
  updateUserPhoto: (image: File) => any;
  updateUserData: (userData: Profile) => any;
}

const ProfileInfo: React.FC<Props> = ({
                                        isOwner,
                                        userInfo,
                                        userStatus,
                                        updateUserStatus,
                                        updateUserPhoto,
                                        updateUserData
                                      }) => {
  const { photos } = userInfo || {};

  const handleChangePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      updateUserPhoto(e.target.files[0]);
    }
  };

  return (
    userInfo
    ? <div>
      <img
        src="https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"
        alt="машина"/>
      <div>
        <img className={classes.info__avatar} src={photos?.large || emptyAvatar} alt="Avatar"/>
        {isOwner && <input type="file" onChange={handleChangePhoto}/>}
        <ProfileData profileData={userInfo} updateUserData={updateUserData}/>
        <ProfileStatus status={userStatus} updateUserStatus={updateUserStatus}/>
      </div>
    </div>
    : <Preloader/>
  );
};

export default ProfileInfo;
