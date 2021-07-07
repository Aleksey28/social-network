import React from 'react';
import classes from './Respondent.module.css';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Respondent = ( { id, owner: { avatar, name } } ) => {
  const { path } = useRouteMatch();
  return (
    <div className={ classes.respondent }>
      <NavLink to={ `${ path }/${ id }` }>
        <img src={ avatar } alt="respondent's avatar"/>
        { name }
      </NavLink>
    </div>
  );
};

export default Respondent;
