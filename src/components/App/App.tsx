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
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { initializing, InitialState, ThunkType } from '../../redux/app/reducer';
import Preloader from '../common/Preloader/Preloader';
import { getInitializedState } from '../../redux/app/selector';
import { getIsAuthState } from '../../redux/auth/selector';
import withSuspense from '../../hoc/withSuspense';
import { AppStateType } from '../../redux/redux-store';

const DialogsContainer = lazy(() => import('../Dialogs/DialogsContainer').then(DialogsContainer => DialogsContainer));
const UsersContainer   = lazy(() => import('../Users/UsersContainer').then(UsersContainer => UsersContainer));

interface AppProps extends InitialState {
  initializing: () => ThunkType;
  isAuth: boolean;
}

class App extends React.Component {
  props!: AppProps;

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
                     {/*@ts-ignore*/}
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

const mapStateToProps = (state: AppStateType) => ({
  isAuth:      getIsAuthState(state),
  initialized: getInitializedState(state),
});

const mapDispatchToProps = {
  initializing,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App);

