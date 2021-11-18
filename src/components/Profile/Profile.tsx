import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

interface Props {
  userId: string;
}

const Profile: React.FC<Props> = (props) => {
  return (
    <main>
      <ProfileInfo {...props}/>
      <MyPostsContainer/>
    </main>
  );
};

export default Profile;
