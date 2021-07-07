import classes from './Friends.module.css';
import React from 'react';
import FriendMini from './FriendMini/FriendMini';

const Friends = ( { friends } ) => {
  const friendsElements = friends.map( ( item ) => <FriendMini key={ item.id } { ...item }/> );

  return (
    <ul className={ classes.list }>
      { friendsElements }
    </ul>
  );
};

export default Friends;
