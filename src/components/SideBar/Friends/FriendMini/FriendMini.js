import classes from "./FriendMini.module.css";
import React from "react";

const FriendMini = ({name, avatar}) => {
  return (
    <div className={classes.item}>
      <img src={avatar} alt="friend's avatar"/>
      <span>{name}</span>
    </div>
  );
};

export default FriendMini;
