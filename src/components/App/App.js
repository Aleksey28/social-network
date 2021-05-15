import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

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
          <ProtectedRoute condition={ isAuth } to={ '/auth' }>
            <Route path="/profile/:userId?">
              <ProfileContainer/>
            </Route>
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

