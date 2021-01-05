import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/messages">
        <Messages/>
      </Route>
    </div>
  );
}

export default App;

