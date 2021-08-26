import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../../redux/auth/reducer';
import { getEmailState, getIsAuthState, getLoginState, getUserIdState } from '../../redux/auth/selector';

class HeaderContainer extends React.Component {
  props!: {
    email: string;
    login: string;
    userId: string;
    isAuth: boolean;
    logout: () => Promise<void>;
  };

  render() {
    return (
      <Header { ...this.props }/>
    );
  }
}

const mapStateToProps = ( state: any ) => ({
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
// @ts-ignore
)( HeaderContainer );
