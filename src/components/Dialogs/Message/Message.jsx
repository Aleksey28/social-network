import React from "react";
import classes from "./Message.module.css";

const Message = ({ message, owner }) => {
  return (
    <div className={`${classes.message} ${owner.id === 1 && classes.message_own}`}>
      <img src={owner.avatar} alt="respondent's avatar"/>
      {message}
    </div>
  );
};

export default Message;
