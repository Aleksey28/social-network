import classes from "./SideBar.module.css";
import React from "react";
import Friends from "./Friends/Friends";

const SideBar = (props) => {
  return (
    <div className={classes.side}>
      <h2 className={classes.title}>Friends</h2>
      <Friends {...props}/>
    </div>
  );
};

export default SideBar;
