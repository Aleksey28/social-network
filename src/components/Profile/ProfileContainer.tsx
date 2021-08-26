import React from 'react';
import { connect } from 'react-redux';
import {
  getUserInfo,
  getUserStatus,
  updateUserData,
  updateUserPhoto,
  updateUserStatus,
} from '../../redux/profile/reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getUserInfoState, getUserStatusState } from '../../redux/profile/selector';
import { getUserIdState } from '../../redux/auth/selector';
import { Profile as ProfileInterface } from '../../types';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  props!: {
    history: any;
    getUserInfo: any;
    getUserStatus: any;
    match: any;
    userId: number;
    userInfo: ProfileInterface;
    userStatus: string;
    updateUserStatus: any;
    updateUserPhoto: any;
    updateUserData: any;
  };

  _refreshAvatarProfileInfo = () => {
    const { history, getUserInfo, getUserStatus } = this.props;
    const userId                                  = this.props.match.params.userId || this.props.userId;

    if (!userId) {
      history.push('/login');
    }

    getUserInfo(userId);
    getUserStatus(userId);
  };

  componentDidMount () {
    this._refreshAvatarProfileInfo();
  }

  componentDidUpdate (prevProps: any, prevState: any, snapshot: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this._refreshAvatarProfileInfo();
    }
  }

  render () {
    return (
      <Profile {...this.props} />
    );
  }
}

const mapStateToProps = (state: any) => ({
  userInfo:   getUserInfoState(state),
  userStatus: getUserStatusState(state),
  userId:     getUserIdState(state),
});

const mapDispatchToProps = {
  getUserInfo,
  getUserStatus,
  updateUserStatus,
  updateUserPhoto,
  updateUserData,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(ProfileContainer);
