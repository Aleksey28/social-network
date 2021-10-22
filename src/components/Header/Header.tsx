import React from 'react';
import logo from '../../images/logo.svg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

interface PropsType {
  login: string;
  logout: () => void;
  isAuth: boolean;
}

const Header: React.FC<PropsType> = ({ login, logout, isAuth }) => {
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
         : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
