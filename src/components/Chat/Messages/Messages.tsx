import React from "react";
import Message from "./Message/Message";
import classes from './Messages.module.css';
import { MessageProps } from "../Chat";

interface MessagesProps {
  messages: MessageProps[]
}

const Messages: React.FC<MessagesProps> = ({ messages }) => {
  return (
    <div className={classes.messages}>
      {messages.map((message, index) => <Message key={index} {...message} />)}
    </div>
  )
}

export default Messages;