import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserInfo, getUserStatus, updateUserStatus } from '../../redux/profile/reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getUserIdState, getUserInfoState, getUserStatusState } from '../../redux/profile/selector';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.userId;

    if ( !userId ) {
      this.props.history.push( '/login' );
    }

    this.props.getUserInfo( userId );
    this.props.getUserStatus( userId );
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
