import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper__content">
        <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/messages">
            <Messages/>
          </Route>
          <Route exact path="/">
            <Redirect to="/profile"/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

