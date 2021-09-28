import './App.css';
import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import SideBarContainer from '../SideBar/SideBarContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import ProtectedRoute from '../../hoc/ProtectedRoute';
import LoginContainer from '../Login/LoginContainer';
import { compose } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router';
import { initializing } from '../../redux/app/reducer';
import Preloader from '../common/Preloader/Preloader';
import { getInitializedState } from '../../redux/app/selector';
import { getIsAuthState } from '../../redux/auth/selector';
import withSuspense from '../../hoc/withSuspense';
import { AppStateType } from '../../redux/redux-store';

const DialogsContainer = lazy(() => import('../Dialogs/DialogsContainer').then(DialogsContainer => DialogsContainer));
const UsersContainer   = lazy(() => import('../Users/UsersContainer').then(UsersContainer => UsersContainer));

interface StatePropsType {
  isAuth: boolean;
  initialized: boolean;
}

interface DispatchPropsType {
  initializing: () => void;
}

interface OwnProps {
}

type PropsType = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): StatePropsType => ({
  isAuth:      getIsAuthState(state),
  initialized: getInitializedState(state),
});

const mapDispatchToProps: DispatchPropsType = {
  initializing,
};

const connector = connect<StatePropsType, DispatchPropsType, OwnProps, AppStateType>(mapStateToProps, mapDispatchToProps);

class App extends React.Component<PropsType> {
  componentDidMount () {
    this.props.initializing();
  }

  render () {
    let { isAuth, initialized } = this.props;
    return initialized
           ? (
             <div className="app-wrapper">
               <HeaderContainer/>
               <Navbar/>
               <SideBarContainer/>
               <div className="app-wrapper__content">
                 <Switch>
                   <Redirect exact from="/" to="/profile"/>
                   <Route path="/login">
                     <LoginContainer/>
                   </Route>
                   <Route path="/profile/:userId?">
                     <ProfileContainer/>
                   </Route>
                   <ProtectedRoute path="/messages"
                                   condition={isAuth}
                                   to={'/login'}
                                   render={withSuspense(DialogsContainer)}/>
                   <ProtectedRoute path="/users"
                                   condition={isAuth}
                                   to={'/login'}
                                   render={withSuspense(UsersContainer)}/>
                   <Route path="/error">
                     <div>
                       ERROR 404 =D
                     </div>
                   </Route>
                   <Redirect to="/error"/>
                 </Switch>
               </div>
             </div>
           )
           : <Preloader/>;
  }
}

export default compose<React.ComponentType>(
  withRouter,
  connector,
)(App);

