import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <SideBar/>
      <div className="app-wrapper__content">
        <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/messages">
            <DialogsContainer/>
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

