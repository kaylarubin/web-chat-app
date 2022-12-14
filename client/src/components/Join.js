import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Join.css";

const Join = ({ userTaken }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const history = useHistory();

  const joinRoom = (event) => {
    if (!name || !room) {
      event.preventDefault();
      return;
    }
    history.push(`/chat?name=${name}&room=${room}`);
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        {userTaken ? (
          <div className="userTakenError">
            Name is already taken for that room.
          </div>
        ) : null}
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
            onKeyPress={(event) =>
              event.key === "Enter" ? joinRoom(event) : null
            }
          />
        </div>
        <button className={"button mt-20"} type="submit" onClick={joinRoom}>
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Join;
