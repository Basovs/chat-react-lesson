import React from "react";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import { useState, useEffect } from "react";

const RoomPage = () => {
  const CHAT_ROOM_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json";
  const [chatRoom, setChatRoom] = useState({});

  // Hämtar chattroom med all meddelanden igen. Körs vid 'SendMessage' click.
  const handleGetChatRoom = () => {
    const url = CHAT_ROOM_URL;
    fetch(url)
      .then(res => res.json())
      .then(data => setChatRoom(data));
  };

  useEffect(() => {
    handleGetChatRoom();
  }, []);

  return (
    <div>
      <h1>Room Page</h1>
      <div>
        <h1>{chatRoom.name}</h1>
        <MessageForm handleGetChatRoom={handleGetChatRoom} />
        <MessageList chatRoom={chatRoom} />
      </div>
    </div>
  );
};

export default RoomPage;
