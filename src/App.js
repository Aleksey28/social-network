import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import Users from "./components/Users/Users";

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
            <Users/>
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

