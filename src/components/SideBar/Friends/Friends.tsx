import classes from './Friends.module.css';
import React from 'react';
import FriendMini from './FriendMini/FriendMini';
import { InitialState } from '../../../redux/friends/reducer';

interface FriendsProps {
  friends: InitialState;
}

const Friends = ({ friends }: FriendsProps): JSX.Element => {
  const friendsElements = friends.map((item) => <FriendMini key={item.id} {...item}/>);

  return (
    <ul className={classes.list}>
      {friendsElements}
    </ul>
  );
};

export default Friends;
