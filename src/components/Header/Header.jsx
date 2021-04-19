import React from "react";
import logo from "../../images/logo.svg";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="" className={classes.logo}/>
    </header>
  );
}
