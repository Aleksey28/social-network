import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { login } from '../../redux/auth/reducer';
import { getIsAuthState } from '../../redux/auth/selector';

class LoginContainer extends React.Component {
  render() {
    return (
      <Login { ...this.props }/>
    );
  }
}

const mapStateToProps = ( state ) => ({
  isAuth: getIsAuthState( state ),
});

const mapDispatchToProps = {
  login,
};

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
)( LoginContainer );
