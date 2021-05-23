import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo userInfo={props.userInfo} userStatus={ props.userStatus} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer/>
    </main>
  );
};

export default Profile;
