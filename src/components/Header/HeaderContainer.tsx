import React from 'react';
import Header from './Header';
import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import { logout, ThunkType } from '../../redux/auth/reducer';
import { getEmailState, getIsAuthState, getLoginState, getUserIdState } from '../../redux/auth/selector';
import { AppStateType } from '../../redux/redux-store';

interface StatePropsType {
  email: string;
  login: string;
  userId: string;
  isAuth: boolean;
}

interface DispatchPropsType {
  logout: () => ThunkType;
}

interface OwnPropsType {
}

type PropsType = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): StatePropsType => ({
  email:  getEmailState(state),
  login:  getLoginState(state),
  userId: getUserIdState(state),
  isAuth: getIsAuthState(state),
});

const mapDispatchToProps: DispatchPropsType = {
  logout,
};

const connector = connect<StatePropsType, DispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps);

class HeaderContainer extends React.Component<PropsType> {
  render () {
    return (
      <Header {...this.props}/>
    );
  }
}

export default compose(
  connector,
)(HeaderContainer);
