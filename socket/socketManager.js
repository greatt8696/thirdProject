// const socketio = require("socket.io");

class socketManager {
  constructor(server) {
    io = socketio(server);
    io.on("connection", (socket) => {
      console.log("Socket 작동중");
    });
  }

}

