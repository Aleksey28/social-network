import React from 'react';
import Header from './Header';
import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import { logout, ThunkType } from '../../redux/auth/reducer';
import { getEmailState, getIsAuthState, getLoginState, getUserIdState } from '../../redux/auth/selector';
import { AppStateType } from '../../redux/redux-store';

interface StateProps {
  email: string;
  login: string;
  userId: string;
  isAuth: boolean;
}

interface DispatchProps {
  logout: () => ThunkType;
}

interface OwnProps {
}

type Props = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): StateProps => ({
  email:  getEmailState(state),
  login:  getLoginState(state),
  userId: getUserIdState(state),
  isAuth: getIsAuthState(state),
});

const mapDispatchToProps: DispatchProps = {
  logout,
};

const connector = connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps);

class HeaderContainer extends React.Component<Props> {
  render () {
    return (
      <Header {...this.props}/>
    );
  }
}

export default compose(
  connector,
)(HeaderContainer);
