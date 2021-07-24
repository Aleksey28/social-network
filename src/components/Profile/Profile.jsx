import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ( { userId, userInfo, userStatus, updateUserStatus, updateUserPhoto } ) => {
  return (
    <main>
      <ProfileInfo isOwner={ userId === userInfo?.userId }
                   userInfo={ userInfo }
                   userStatus={ userStatus }
                   updateUserStatus={ updateUserStatus }
                   updateUserPhoto={ updateUserPhoto }/>
      <MyPostsContainer/>
    </main>
  );
};

export default Profile;
