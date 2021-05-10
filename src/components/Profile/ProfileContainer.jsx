import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import profileAPI from '../../api/profileAPI';

class ProfileContainer extends React.Component {
  componentDidMount() {
    profileAPI.getProfileData( this.props.match.params.userId )
      .then( data => this.props.setUserInfo( data ) )
      .catch( console.log );
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
  setUserInfo,
};

const WithUrlDataContainerComponent = withRouter( ProfileContainer );

export default connect( mapStateToProps, mapDispatchToProps )( WithUrlDataContainerComponent );
