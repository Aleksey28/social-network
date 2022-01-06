import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import emptyAvatar from '../../../images/empty_avatar.svg';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfileData from './ProfileData/ProfileData';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPhoto } from '../../../redux/profile/reducer';
import { getUserInfoState } from '../../../redux/profile/selector';
import { Image } from 'antd';

interface Props {
  userId: string;
}

const ProfileInfo: React.FC<Props> = ({ userId }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(getUserInfoState);
  const isOwner  = userId === userInfo?.userId;

  const handleChangePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      dispatch(updateUserPhoto(e.target.files[0]));
    }
  };

  return (
    userInfo
    ? <div className={classes.info}>
      <Image
        width={256}
        height={256}
        src={userInfo?.photos?.large || emptyAvatar}
        fallback={emptyAvatar}
      />
      {isOwner && <input type="file" onChange={handleChangePhoto}/>}
      <ProfileData profileData={userInfo} isOwner={isOwner}/>
      <ProfileStatus isOwner={isOwner}/>
    </div>
    : <Preloader/>
  );
};

export default ProfileInfo;
