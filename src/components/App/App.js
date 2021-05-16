import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import DialogsContainer from '../Dialogs/DialogsContainer';
import SideBarContainer from '../SideBar/SideBarContainer';
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import HeaderContainer from '../Header/HeaderContainer';
import Auth from '../Auth/Auth';
import ProtectedRoute from '../../hoc/ProtectedRoute';

const App = ( { isAuth } ) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <SideBarContainer/>
      <div className="app-wrapper__content">
        <Switch>
          <Route path="/auth">
            <Auth/>
          </Route>
          <Route path="/profile/:userId?">
            <ProfileContainer/>
          </Route>
          <ProtectedRoute condition={ isAuth } to={ '/auth' }>
            <Route path="/messages">
              <DialogsContainer/>
            </Route>
            <Route path="/users">
              <UsersContainer/>
            </Route>
          </ProtectedRoute>
          <Route exact path="/">
            <Redirect to="/profile"/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

