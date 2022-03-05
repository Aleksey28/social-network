import React from "react";
import Messages from "./Messages/Messages";
import NewMessage from "./NewMessage/NewMessage";

const Chat: React.FC = () => {
  return (
    <div>
      <Messages />
      <NewMessage />
    </div>
  )
}

export default Chat;