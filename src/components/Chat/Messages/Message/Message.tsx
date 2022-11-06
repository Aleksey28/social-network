import { Avatar, Image } from "antd";
import React from "react";
import { MessageProps } from "../../Chat";
import classes from './Message.module.css';

const Message: React.FC<MessageProps> = (data) => {
  return (
    <div className={classes.message}>
      <div>
        <Avatar size="large" src={<Image src={data.photo} preview={false} />} />
        {data.userName}
      </div>
      <div>
        {data.message}
      </div>
    </div>
  )
}

export default Message;