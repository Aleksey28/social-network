import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserInfo, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserInfo( this.props.match.params.userId );
    this.props.getUserStatus( this.props.match.params.userId );
  }

  render() {
    return (
      <Profile { ...this.props } />
    );
  }
}

const mapStateToProps = ( state ) => ({
  userInfo: state.profilePage.userInfo,
  userStatus: state.profilePage.userStatus,
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
