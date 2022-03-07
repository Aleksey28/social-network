import { Avatar, Image } from "antd";
import React from "react";
import classes from './Message.module.css';

interface MessageProps {
  url: string;
  author: string;
  text: string;
}

const Message: React.FC<MessageProps> = (message) => {
  return (
    <div className={classes.message}>
      <div>
        <Avatar size="large" src={<Image src={message.url} preview={false} />} />
        {message.author}
      </div>
      <div>
        {message.text}
      </div>
    </div>
  )
}

export default Message;