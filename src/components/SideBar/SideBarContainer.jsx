import classes from "./SideBar.module.css";
import React, { useContext } from "react";
import Friends from "./Friends/Friends";
import StoreContext from "../../StoreContext";

const SideBar = () => {
  const {store} = useContext(StoreContext);

  return (
    <div className={classes.side}>
      <h2 className={classes.title}>Friends</h2>
      <Friends friends={store.getState().friends}/>
    </div>
  );
};

export default SideBar;
