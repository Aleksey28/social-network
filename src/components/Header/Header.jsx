import React from 'react';
import logo from '../../images/logo.svg';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header( { login, isAuth } ) {
  return (
    <header className={ classes.header }>
      <img src={ logo } alt="" className={ classes.logo }/>
      <div>
        { isAuth
          ? <p>{ login }</p>
          : <NavLink to='/auth'>Login</NavLink> }
      </div>
    </header>
  );
}
