import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { login } from '../../redux/auth/reducer';
import { getCaptchaUrlState, getIsAuthState } from '../../redux/auth/selector';
import { LoginPropsType } from '../../types';
import { AppStateType } from '../../redux/redux-store';

interface StateProps {
  isAuth: boolean;
  captchaUrl: string;
}

interface DispatchProps {
  login: (props: LoginPropsType) => any
}

interface OwnProps {
}

type Props = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): StateProps => ({
  isAuth:     getIsAuthState(state),
  captchaUrl: getCaptchaUrlState(state),
});

const mapDispatchToProps: DispatchProps = {
  login,
};

const connector = connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps);

class LoginContainer extends React.Component<Props> {
  render () {
    return (
      <Login {...this.props}/>
    );
  }
}


export default compose(
  connector,
)(LoginContainer);
