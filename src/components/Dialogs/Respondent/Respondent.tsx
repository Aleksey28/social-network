import React from 'react';
import classes from './Respondent.module.css';
import { NavLink, useRouteMatch } from 'react-router-dom';
import EmptyAvatar from '../../../images/empty_avatar.svg';

interface Props {
  id: number;
  owner?: {
    name: string;
    avatar: string;
  }
}

const Respondent: React.FC<Props> = ( { id, owner: { avatar, name } = { name: 'NoName', avatar: EmptyAvatar } } ) => {
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
