import React from "react";

const MessageList = ({ chatRoom }) => {
  return (
    <ul>
      {chatRoom.messages &&
        Object.entries(chatRoom.messages)
          .reverse()
          .map(item => {
            const key = item[0];
            const payload = item[1];
            // console.log(chatRoom);
            return <li key={key}>{payload.message}</li>;
          })}
    </ul>
  );
};

export default MessageList;
