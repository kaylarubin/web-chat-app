import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import "../styles/Chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT, {
      // withCredentials: true,
      withCredentials: false,
    });
    setName(name);
    setRoom(room);
  }, [ENDPOINT, location.search]);
  return <h1>Chat</h1>;
};
export default Chat;
