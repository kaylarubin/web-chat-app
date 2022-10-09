const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("We have a new connection");
  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));
