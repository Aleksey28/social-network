import React, { useContext } from "react";
import StoreContext from "../../StoreContext";
import SideBar from "./SideBar";

const SideBarContainer = () => {
  const { store } = useContext(StoreContext);

  return <SideBar friends={store.getState().friends}/>;
};

export default SideBarContainer;
