import React from "react";
import Message from "./Message/Message";
import emptyAvatar from '../../../images/empty_avatar.svg';
import classes from './Messages.module.css';

const Messages: React.FC = () => {
  const messages = Array(20).fill({
    url: emptyAvatar,
    author: 'Aleksey',
    text: 'Hello world',
  })

  return (
    <div className={classes.messages}>
      {messages.map(message => <Message {...message} />)}
    </div>
  )
}

export default Messages;