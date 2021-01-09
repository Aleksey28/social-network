import classes from "./Friends.module.css";
import React from "react";
import FriendMini from "./FriendMini/FriendMini";

const Friends = ({ friends }) => {
  return (
      <ul className={classes.list}>
        {friends.map((item) => <FriendMini key={item.id} {...item}/>)}
      </ul>
  );
};

export default Friends;
