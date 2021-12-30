import React, { useCallback, useEffect, useRef } from 'react';
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
  const userId     = useSelector(getUserIdState);
  const refUserId  = useRef(userId);

  const refreshProfileInfo = useCallback(() => {
    refUserId.current = params.userId || refUserId.current || '';

    if (!refUserId.current) {
      history.push('/login');
    }

    dispatch(getUserInfo(refUserId.current));
    dispatch(getUserStatus(refUserId.current));
  }, [params, dispatch, history]);

  useEffect(() => {
    refreshProfileInfo();
  }, [refreshProfileInfo]);

  useEffect(() => {
    refreshProfileInfo();
  }, [params, refreshProfileInfo]);

  return (
    <main>
      <ProfileInfo userId={userId}/>
      <MyPosts/>
    </main>
  );
};

export default ProfilePage;
