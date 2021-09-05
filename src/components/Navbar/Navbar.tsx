import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <NavLink className={classes.item}
                   activeClassName={classes.item_active}
                   to="/profile"
                   href="#">Profile</NavLink>
        </li>
        <li>
          <NavLink className={classes.item}
                   activeClassName={classes.item_active}
                   to="/messages"
                   href="#">Messages</NavLink>
        </li>
        <li>
          <NavLink className={classes.item} activeClassName={classes.item_active} to="/news" href="#">News</NavLink>
        </li>
        <li>
          <NavLink className={classes.item}
                   activeClassName={classes.item_active}
                   to="/music"
                   href="#">Music</NavLink>
        </li>
        <li>
          <NavLink className={classes.item}
                   activeClassName={classes.item_active}
                   to="/settings"
                   href="#">Settings</NavLink>
        </li>
        <li>
          <NavLink className={classes.item}
                   activeClassName={classes.item_active}
                   to="/users"
                   href="#">Find users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
