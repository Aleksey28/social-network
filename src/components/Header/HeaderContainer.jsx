import React from 'react';
import Header from './Header';
import { setUserData } from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header/>
    );
  }
}

const mapStateToProps = ( state ) => ({
  email: state.auth.email,
  login: state.auth.login,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  setUserData,
};

export default connect( mapStateToProps, mapDispatchToProps )( HeaderContainer );
