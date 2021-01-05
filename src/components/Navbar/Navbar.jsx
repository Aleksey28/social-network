import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <NavLink className={classes.item}
                   activeClassName={classes.item_active}
                   to="/Profile"
                   href="#">Profile</NavLink>
        </li>
        <li>
          <NavLink className={classes.item}
                   activeClassName={classes.item_active}
                   to="/Messages"
                   href="#">Messages</NavLink>
        </li>
        <li>
          <NavLink className={classes.item} activeClassName={classes.item_active} to="/News" href="#">News</NavLink>
        </li>
        <li>
          <NavLink className={classes.item} activeClassName={classes.item_active} to="/Music" href="#">Music</NavLink>
        </li>
        <li>
          <NavLink className={classes.item}
                   activeClassName={classes.item_active}
                   to="/Settings"
                   href="#">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}
