import React from "react";
import { useRef } from "react";

const MessageForm = ({ handleGetChatRoom }) => {
  const MESSAGE_LIST_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json";
  const messageInputField = useRef();

  const handlePostMessage = () => {
    const url = MESSAGE_LIST_URL;
    console.log(messageInputField.current.value);
    const data = {
      message: messageInputField.current.value,
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        handleGetChatRoom();
      });
  };

  return (
    <div>
      <input ref={messageInputField} type="text"></input>
      <button onClick={handlePostMessage}>Send Message</button>
    </div>
  );
};

export default MessageForm;
