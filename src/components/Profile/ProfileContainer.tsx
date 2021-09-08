import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
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
import { AppStateType } from '../../redux/redux-store';

interface StateProps {
  userInfo: Partial<ProfileInterface>;
  userStatus: string;
  userId: string | null;
}

interface DispatchProps {
  getUserInfo: (userId: string) => any;
  getUserStatus: (userId: string) => any;
  updateUserStatus: (status: string) => any;
  updateUserPhoto: (image: File) => any;
  updateUserData: (userData: ProfileInterface) => any;
}

interface OwnProps {
  history: any;
  match: any;
}

type Props = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): StateProps => ({
  userInfo:   getUserInfoState(state),
  userStatus: getUserStatusState(state),
  userId:     getUserIdState(state),
});

const mapDispatchToProps: DispatchProps = {
  getUserInfo,
  getUserStatus,
  updateUserStatus,
  updateUserPhoto,
  updateUserData,
};

const connector = connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps);

class ProfileContainer extends React.Component<Props & OwnProps> {
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

  componentDidUpdate (prevProps: Props & OwnProps) {
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

export default compose(
  connector,
  withRouter,
)(ProfileContainer);
