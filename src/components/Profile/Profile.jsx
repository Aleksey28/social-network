import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo/>
      <MyPostsContainer {...props}/>
    </main>
  );
};

export default Profile;
