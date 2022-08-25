const socketio = require("socket.io");

class SocketManager {
  constructor(server) {
    this.io = socketio(server);
    this.auction = this.io.of("/auction")
    this.event = this.io.of("/event")
    this.init()
    this.createAuction("뀨뀨뀨")
    this.createEvent("쀼쀼쀼")
  }
  init() {
    this.io.on("connection", (socket) => {
      console.log("Socket 작동중");
    });
  }
  createAuction(room) {
    this.auction.on("connect",()=>{
      console.log(`${room} 옥션뀨`);
    })
  }
  createEvent(room) {
    this.event.on("connect",()=>{
      console.log(`${room} 이벤트쀼`);
    })
  }
}

module.exports = SocketManager;
