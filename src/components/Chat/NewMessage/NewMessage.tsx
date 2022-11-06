import React, { useState } from "react";

interface NewMessageProps {
  chatWS?: WebSocket;
}

const NewMessage: React.FC<NewMessageProps> = ({ chatWS }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message || !chatWS)
      return;

    chatWS.send(message)

    setMessage('');
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  }

  return (
    <div>
      <div><textarea onChange={handleChangeMessage} value={message}></textarea></div>
      <div><button onClick={handleSendMessage}>Send</button></div>
    </div>
  )
}

export default NewMessage;