import React from "react";
import Messages from "./Messages/Messages";
import NewMessage from "./NewMessage/NewMessage";

const Chat: React.FC = () => {
  const [chatWS, setChatWS] = useState<WebSocket>()

  useEffect(() => {
    const chatWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

    setChatWS(chatWS)
  }, [])
  return (
    <div>
      <Messages />
      <NewMessage />
    </div>
  )
}

export default Chat;