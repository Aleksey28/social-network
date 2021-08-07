import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { getCaptcha, login } from '../../redux/auth/reducer';
import { getCaptchaUrlState, getIsAuthState } from '../../redux/auth/selector';

class LoginContainer extends React.Component {
  render() {
    return (
      <Login { ...this.props }/>
    );
  }
}

const mapStateToProps = ( state ) => ({
  isAuth: getIsAuthState( state ),
  captchaUrl: getCaptchaUrlState( state ),
});

const mapDispatchToProps = {
  login,
  getCaptcha,
};

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
)( LoginContainer );
