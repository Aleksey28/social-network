import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/profileReducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserInfo( this.props.match.params.userId );
  }

  render() {
    return (
      <Profile { ...this.props } />
    );
  }
}

const mapStateToProps = ( state ) => ({
  userInfo: state.profilePage.userInfo,
});

const mapDispatchToProps = {
  getUserInfo,
};

const WithUrlDataContainerComponent = withRouter( ProfileContainer );

export default connect( mapStateToProps, mapDispatchToProps )( WithUrlDataContainerComponent );
