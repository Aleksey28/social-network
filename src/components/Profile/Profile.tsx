import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Profile as ProfileInterface } from '../../types';

interface Props {
  userId: string | null;
  userInfo: Partial<ProfileInterface>;
  userStatus: string;
  updateUserStatus: (status: string) => any;
  updateUserPhoto: (image: File) => any;
  updateUserData: (userData: ProfileInterface) => any;
}

const Profile: React.FC<Props> = ({
                                    userId,
                                    userInfo,
                                    userStatus,
                                    updateUserStatus,
                                    updateUserPhoto,
                                    updateUserData
                                  }) => {
  return (
    <main>
      <ProfileInfo isOwner={userId === userInfo?.userId}
                   userInfo={userInfo}
                   userStatus={userStatus}
                   updateUserStatus={updateUserStatus}
                   updateUserPhoto={updateUserPhoto}
                   updateUserData={updateUserData}/>
      <MyPostsContainer/>
    </main>
  );
};

export default Profile;
