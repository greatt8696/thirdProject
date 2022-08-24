const socketio = require("socket.io");

class socketManager {
  constructor(server) {
    io = socketio(server);
    io.sockets.on("connection", (socket) => {
        
    });
  }
}

