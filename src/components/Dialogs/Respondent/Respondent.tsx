import React from 'react';
import classes from './Respondent.module.css';
import { NavLink, useRouteMatch } from 'react-router-dom';

interface RespondentProps {
  id: number;
  owner: {
    name: number;
    avatar: string;
  }
}

const Respondent = ( { id, owner: { avatar, name } }: RespondentProps ): JSX.Element => {
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
