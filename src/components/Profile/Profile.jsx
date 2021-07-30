import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ( { userId, userInfo, userStatus, updateUserStatus, updateUserPhoto, updateUserData } ) => {
  return (
    <main>
      <ProfileInfo isOwner={ userId === userInfo?.userId }
                   userInfo={ userInfo }
                   userStatus={ userStatus }
                   updateUserStatus={ updateUserStatus }
                   updateUserPhoto={ updateUserPhoto }
                   updateUserData={ updateUserData }/>
      <MyPostsContainer/>
    </main>
  );
};

export default Profile;
