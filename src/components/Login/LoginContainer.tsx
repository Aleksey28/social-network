import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import Login from './Login';
import { login } from '../../redux/auth/reducer';
import { getCaptchaUrlState, getIsAuthState } from '../../redux/auth/selector';
import { LoginPropsType } from '../../types';
import { AppStateType } from '../../redux/redux-store';

interface StateProps {
}

interface DispatchProps {
  login: (props: LoginPropsType) => void
}

interface OwnProps {
}

type Props = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): StateProps => ({
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
