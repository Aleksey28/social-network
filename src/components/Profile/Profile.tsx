import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileType } from '../../types';

interface Props {
  userId: string | null;
  userInfo: Partial<ProfileType>;
  userStatus: string;
  isValid: boolean;
  updateUserStatus: (status: string) => void;
  updateUserPhoto: (image: File) => void;
  updateUserData: (userData: ProfileType) => Promise<void>;
}

const Profile: React.FC<Props> = ({
                                    userId,
                                    userInfo,
                                    userStatus,
                                    isValid,
                                    updateUserStatus,
                                    updateUserPhoto,
                                    updateUserData
                                  }) => {
  return (
    <main>
      <ProfileInfo isOwner={userId === userInfo?.userId}
                   userInfo={userInfo}
                   userStatus={userStatus}
                   isValid={isValid}
                   updateUserStatus={updateUserStatus}
                   updateUserPhoto={updateUserPhoto}
                   updateUserData={updateUserData}/>
      <MyPostsContainer/>
    </main>
  );
};

export default Profile;
