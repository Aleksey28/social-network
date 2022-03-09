import React, { useEffect, useState } from "react";
import Messages from "./Messages/Messages";
import NewMessage from "./NewMessage/NewMessage";

export interface MessageProps {
  message: string;
  photo: string;
  userId: number;
  userName: string;
}

const Chat: React.FC = () => {

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [chatWS, setChatWS] = useState<WebSocket>()

  useEffect(() => {
    const chatWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

    setChatWS(chatWS)

    chatWS.addEventListener('message', (e) => {
      setMessages((prev) => [...prev, ...JSON.parse(e.data)])
    })
  }, [])


  return (
    <div>
      <Messages />
      <NewMessage />
    </div>
  )
}

export default Chat;