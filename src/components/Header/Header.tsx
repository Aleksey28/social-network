import React from 'react';
import logo from '../../images/logo.svg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  login: string;
  logout: () => any;
  isAuth: boolean;
}

const Header: React.FC<HeaderProps> = ({ login, logout, isAuth }) => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="" className={classes.header__logo}/>
      <div>
        {isAuth
         ? (
           <div className={classes.header__nav}>
             <p>{login}</p>
             <button onClick={logout}>Log out</button>
           </div>
         )
         : <NavLink to="/auth">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
