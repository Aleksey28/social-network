import classes from './SideBar.module.css';
import React from 'react';
import Friends from './Friends/Friends';

const SideBar = ( { friends } ) => {
  return (
    <div className={ classes.side }>
      <h2 className={ classes.title }>Friends</h2>
      <Friends friends={ friends }/>
    </div>
  );
};

export default SideBar;
