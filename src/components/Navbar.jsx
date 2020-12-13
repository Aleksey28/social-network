import React from "react";
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li><a className={classes.item} href="#">Profile</a></li>
        <li><a className={classes.item} href="#">Messages</a></li>
        <li><a className={classes.item} href="#">News</a></li>
        <li><a className={classes.item} href="#">Music</a></li>
        <li><a className={classes.item} href="#">Settings</a></li>
      </ul>
    </nav>
  )
}
