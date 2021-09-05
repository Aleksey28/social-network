import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Profile as ProfileInterface } from '../../types';

interface Props {
  userId: number;
  userInfo: ProfileInterface;
  userStatus: string;
  updateUserStatus: (status: string) => Promise<void>;
  updateUserPhoto: (image: File) => Promise<void>;
  updateUserData: (userData: ProfileInterface) => Promise<void>;
}

const Profile: React.FC<Props> = ( { userId, userInfo, userStatus, updateUserStatus, updateUserPhoto, updateUserData } ) => {
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
