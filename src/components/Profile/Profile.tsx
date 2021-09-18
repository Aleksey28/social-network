import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types';

interface Props {
  userId: string | null;
  userInfo: Partial<ProfileType>;
  userStatus: string;
  updateUserStatus: (status: string) => any;
  updateUserPhoto: (image: File) => any;
  updateUserData: (userData: ProfileType) => any;
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
