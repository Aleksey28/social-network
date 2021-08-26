import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { login } from '../../redux/auth/reducer';
import { getCaptchaUrlState, getIsAuthState } from '../../redux/auth/selector';

interface MapStateToProps {
  isAuth: boolean;
  captchaUrl: string;
}

class LoginContainer extends React.Component {
  props!: {
    isAuth: boolean;
    captchaUrl: string;
    login: any;
  };

  render () {
    return (
      <Login {...this.props}/>
    );
  }
}

const mapStateToProps = (state: any):MapStateToProps  => ({
  isAuth:     getIsAuthState(state),
  captchaUrl: getCaptchaUrlState(state),
});

const mapDispatchToProps = {
  login,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
// @ts-ignore
)(LoginContainer);
