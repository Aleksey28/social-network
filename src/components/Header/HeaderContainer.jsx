import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

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

export default connect( mapStateToProps )( HeaderContainer );
