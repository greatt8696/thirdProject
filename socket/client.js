class ClientManager {
  constructor() {
    this.nsp = {
      auction: null,
      chat: null,
      event: null,
    };
  }
  connectAuction(room) {
    auction_nsp = io("/auction");
    auction_nsp.on("connect", (socket) => {
      auction_nsp.emit("joinAuction", "옥션룸", "uid 나나나");
    });
    auction_nsp.on("join_auction", () => {
      console.log("엣헴");
    });
    auction_nsp.on("leave_auction", () => {
      console.log("엣헴");
    });
  }

  /**
   *
   * @param {String} name
   */
  setNsp = (name) => {
    this.nsp[name] = io(`/${name}`);
    return this.nsp[name];
  };

//   setData = (name, na, callBack) => {
//     this.nsp[name].on(`join_${name}`), (socket) => callBack(socket);
//     return this;
//   };
//   setLeave = (name, na, callBack) => {
//     this.nsp[name].on(`leave_${name}`), (socket) => callBack(socket, na);
//     return this;
//   };

  setOn = (name) => {
    return new Promise((resolve, reject) => {
      this.nsp[name].on(name, () => {
        resolve(this);
      });
    });
  };

  joinEmit = (name, room, uid) => {
    this.nsp[name].emit(`join_${name}`, room, uid);
    return this;
  };

  
}

const clientManager = new ClientManager();

// auction.on("connect", (socket) => {
//   auction.emit("join_auction","옥션룸", "uid 나나나")
// });

clientManager.setNsp("auction")
clientManager.setOn("join_auction")

// const event_nsp = io("/event");
// event_nsp.on("connect", (socket) => {
//   console.log("이벤트뀨");
// });

// const chat_nsp = io("/chat");
// chat_nsp.on("connect", (socket) => {
//   console.log("채팅뀨");
// });
