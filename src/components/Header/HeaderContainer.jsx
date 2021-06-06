import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header { ...this.props }/>
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
  logout
}

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
)( HeaderContainer );
