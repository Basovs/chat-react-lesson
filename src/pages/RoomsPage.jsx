import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RoomsPage = ({ getRoomId }) => {
  const CHAT_ROOMS_URL = "https://mock-data-api.firebaseio.com/chatrooms.json";

  const [chatRooms, setChatRooms] = useState({});

  const handleChatRooms = () => {
    const url = CHAT_ROOMS_URL;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        setChatRooms(result);
      });
  };

  // const getPayload = () => {

  // };

  useEffect(() => {
    handleChatRooms();
  }, []);

  return (
    <div>
      <h1>RoomsPage</h1>
      <ul>
        {chatRooms &&
          Object.entries(chatRooms).map((item, index) => {
            // console.log(item[1].name);
            const chatRoomIdPayload = item[0];
            const namePayload = item[1];
            getRoomId(chatRoomIdPayload);
            console.log(chatRoomIdPayload);
            return (
              <li key={index}>
                <Link to={"/room/" + chatRoomIdPayload}>
                  {namePayload.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RoomsPage;
