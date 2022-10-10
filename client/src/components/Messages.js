import React, { useEffect, useRef } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";
import "../styles/Messages.css";

const Messages = ({ messages, name }) => {
  const scrollToBottomRef = useRef(null);

  //   useEffect(() => {
  //     if (scrollToBottomRef.current) {
  //       scrollToBottomRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, [messages]);

  return (
    <ScrollToBottom className="messages" mode={"bottom"}>
      {messages.map((message, i) => {
        return (
          <div key={i}>
            <Message message={message} name={name} />
          </div>
        );
      })}
      {/* <div style={{ float: "left", clear: "both" }} ref={scrollToBottomRef} /> */}
    </ScrollToBottom>
  );
};
export default Messages;
