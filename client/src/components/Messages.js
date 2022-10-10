import React, { useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
import "../styles/Messages.css";

const Messages = ({ messages, name }) => {
  const scrollToBottomRef = useRef(null);

  return (
    <ScrollToBottom className="messages" mode={"bottom"}>
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        );
      })}
    </ScrollToBottom>
  );
};
export default Messages;
