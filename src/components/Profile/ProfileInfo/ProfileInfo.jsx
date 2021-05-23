import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import emptyAvatar from "../../../images/empty_avatar.svg";
import classes from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ userInfo, userStatus, updateUserStatus }) => {
  return (
    userInfo
    ? <div>
      <img
        src="https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_960_720.jpg"
        alt="машина"/>
      <div>
        <img className={classes.info__avatar} src={userInfo.photos.small || emptyAvatar} alt="Avatar"/>
        <ProfileStatus status={userStatus} updateUserStatus={updateUserStatus}/>
        <p>{userInfo.fullName}</p>
        <p>{userInfo.aboutMe}</p>
      </div>
    </div>
    : <Preloader/>
  );
};

export default ProfileInfo;
