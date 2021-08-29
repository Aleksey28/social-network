import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Profile as ProfileInterface } from '../../types';

interface ProfileProps {
  userId: number;
  userInfo: ProfileInterface;
  userStatus: string;
  updateUserStatus: any;
  updateUserPhoto: any;
  updateUserData: any;
}

const Profile = ( { userId, userInfo, userStatus, updateUserStatus, updateUserPhoto, updateUserData }: ProfileProps ): JSX.Element => {
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
