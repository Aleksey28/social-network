import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserInfo, getUserStatus, updateUserStatus } from '../../redux/profile/reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getUserInfoState, getUserStatusState } from '../../redux/profile/selector';
import { getUserIdState } from '../../redux/auth/selector';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const { history, getUserInfo, getUserStatus } = this.props;
    const userId = this.props.match.params.userId || this.props.userId;

    if ( !userId ) {
      history.push( '/login' );
    }

    getUserInfo( userId );
    getUserStatus( userId );
  }

  render() {
    return (
      <Profile { ...this.props } />
    );
  }
}

const mapStateToProps = ( state ) => ({
  userInfo: getUserInfoState( state ),
  userStatus: getUserStatusState( state ),
  userId: getUserIdState( state ),
});

const mapDispatchToProps = {
  getUserInfo,
  getUserStatus,
  updateUserStatus,
};

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withRouter,
)( ProfileContainer );
