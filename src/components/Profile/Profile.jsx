import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ( { userInfo, userStatus, updateUserStatus } ) => {
  return (
    <main>
      <ProfileInfo userInfo={ userInfo }
                   userStatus={ userStatus }
                   updateUserStatus={ updateUserStatus }/>
      <MyPostsContainer/>
    </main>
  );
};

export default Profile;
