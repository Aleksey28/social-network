import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

interface Props {
  userId: string;
}

const Profile: React.FC<Props> = (props) => {
  return (
    <main>
      <ProfileInfo {...props}/>
      <MyPosts/>
    </main>
  );
};

export default Profile;
