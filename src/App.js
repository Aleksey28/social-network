import './App.css';
import React from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;

