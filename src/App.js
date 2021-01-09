import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import SideBar from "./components/SideBar/SideBar";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <SideBar {...props}/>
      <div className="app-wrapper__content">
        <Switch>
          <Route path="/profile">
            <Profile {...props}/>
          </Route>
          <Route path="/messages">
            <Dialogs {...props}/>
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

