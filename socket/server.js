const socketio = require("socket.io");

class SocketServer {
  constructor(server) {
    this.io = socketio(server);
    this.nsp = {
      auction: this.io.of("/auction"),
      event: this.io.of("/event"),
      chat: this.io.of("/chat"),
    };
    this.init();
    this.createAuction();
    this.createEvent();
    this.createChat();
  }
  init() {
    this.io.on("connection", (socket) => {
      console.log("Socket 작동중");
    });
  }
  createAuction(room) {
    this.nsp["auction"].on("connection", (socket) => {
      console.log(`${room} : ${"uid"} 옥션입장뀨`);
      socket.on("join_auction", (room, uid) => {
        socket.join(room);
        socket.to(room).emit("join_auction", room, uid);
        console.log(`${room} : ${uid} 옥션입장뀨`);
      });
      socket.on("leave_auction", (room, uid) => {
        socket.leave(room);
        io.to(room).emit("leave_auction", room, uid);
        console.log(`${room} 옥션나감뀨`);
      });
    });
  }
  createEvent(room) {
    this.nsp["event"].on("connection", () => {
      console.log(`${room} 이벤트쀼`);
    });
  }
  createChat(room) {
    this.nsp["chat"].on("connection", () => {
      console.log(`${room} 채팅쀼`);
    });
  }
}

module.exports = SocketServer;
