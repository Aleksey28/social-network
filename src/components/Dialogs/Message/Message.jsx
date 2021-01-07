import React from "react";
import classes from "./Message.module.css";

const Message = ({ message }) => {
  return (
    <li className={classes.message}>{message}</li>
  );
};

export default Message;
