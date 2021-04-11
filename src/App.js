import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <SideBarContainer/>
      <div className="app-wrapper__content">
        <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/messages">
            <DialogsContainer/>
          </Route>
          <Route path="/users">
            <UsersContainer/>
          </Route>
          <Route exact path="/">
            <Redirect to="/profile"/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

