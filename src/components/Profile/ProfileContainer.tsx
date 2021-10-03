import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  getUserInfo,
  getUserStatus,
  updateUserData,
  updateUserPhoto,
  updateUserStatus,
} from '../../redux/profile/reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'redux';
import { getUserInfoState, getUserStatusState, getIsValid } from '../../redux/profile/selector';
import { getUserIdState } from '../../redux/auth/selector';
import { ProfileType as ProfileInterface } from '../../types';
import Profile from './Profile';
import { AppStateType } from '../../redux/redux-store';

interface StatePropsType {
  userInfo: Partial<ProfileInterface>;
  userStatus: string;
  userId: string | null;
  isValid: boolean;
}

interface DispatchPropsType {
  getUserInfo: (userId: string) => void;
  getUserStatus: (userId: string) => void;
  updateUserStatus: (status: string) => void;
  updateUserPhoto: (image: File) => void;
  updateUserData: (userData: ProfileInterface) => Promise<void>;
}

interface OwnPropsType {}

interface PathParamsType {
  userId: string;
}

type PropsType = ConnectedProps<typeof connector> & RouteComponentProps<PathParamsType>;

const mapStateToProps = (state: AppStateType): StatePropsType => ({
  userInfo:   getUserInfoState(state),
  userStatus: getUserStatusState(state),
  userId:     getUserIdState(state),
  isValid:    getIsValid(state),
});

const mapDispatchToProps: DispatchPropsType = {
  getUserInfo,
  getUserStatus,
  updateUserStatus,
  updateUserPhoto,
// @ts-ignore
  updateUserData,
};

const connector = connect<StatePropsType, DispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps);

class ProfileContainer extends React.Component<PropsType> {
  _refreshAvatarProfileInfo = () => {
    const { history, getUserInfo, getUserStatus } = this.props;
    const userId                                  = this.props.match.params.userId || this.props.userId || '';

    if (!userId) {
      history.push('/login');
    }

    getUserInfo(userId);
    getUserStatus(userId);
  };

  componentDidMount () {
    this._refreshAvatarProfileInfo();
  }

  componentDidUpdate (prevProps: PropsType) {
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

export default compose<React.ComponentType>(
  connector,
  withRouter,
)(ProfileContainer);
