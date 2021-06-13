import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../../redux/auth/reducer';
import { getEmailState, getIsAuthState, getLoginState, getUserIdState } from '../../redux/auth/selector';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header { ...this.props }/>
    );
  }
}

const mapStateToProps = ( state ) => ({
  email: getEmailState( state ),
  login: getLoginState( state ),
  userId: getUserIdState( state ),
  isAuth: getIsAuthState( state ),
});

const mapDispatchToProps = {
  logout,
};

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
)( HeaderContainer );
