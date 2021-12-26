import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, getUserStatus, } from '../../redux/profile/reducer';
import { useHistory, useParams } from 'react-router';
import { getUserIdState } from '../../redux/auth/selector';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const ProfilePage: React.FC = () => {
  const history  = useHistory();
  const dispatch = useDispatch();
  const params   = useParams<{ userId: string }>();
  let userId     = useSelector(getUserIdState);

  const refreshProfileInfo = () => {
    userId = params.userId || userId || '';

    if (!userId) {
      history.push('/login');
    }

    dispatch(getUserInfo(userId));
    dispatch(getUserStatus(userId));
  };

  useEffect(() => {
    refreshProfileInfo();
  }, []);

  useEffect(() => {
    refreshProfileInfo();
  }, [params]);

  return (
    <main>
      <ProfileInfo userId={userId}/>
      <MyPosts/>
    </main>
  );
};

export default ProfilePage;
