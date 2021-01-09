import classes from "./Friends.module.css";
import React from "react";
import FriendMini from "./FriendMini/FriendMini";

const Friends = ({ sideBar }) => {
  return (
      <ul className={classes.list}>
        {sideBar.friends.map((item) => <FriendMini {...item}/>)}
      </ul>
  );
};

export default Friends;
