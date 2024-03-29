import classes from './FriendMini.module.css';
import React from 'react';

interface FriendMiniProps {
  name: string;
  avatar: string;
}

const FriendMini = ({ name, avatar }: FriendMiniProps): JSX.Element => {
  return (
    <div className={classes.item}>
      <img src={avatar} alt="friend's avatar"/>
      <span>{name}</span>
    </div>
  );
};

export default FriendMini;
