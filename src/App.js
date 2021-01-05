import "./App.css";
import React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper__content">
        <HashRouter>
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
        </HashRouter>
      </div>
    </div>
  );
}

export default App;

