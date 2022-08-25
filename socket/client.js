class ClientManager {
  constructor() {
    this.nsp = {};
    this.curr = null;
  }

  initAuction(dataObj) {
    const nspName = "auction";
    this.setNsp(nspName)
      .connect(nspName)
      .then((nsp) => {
        this.sendEmit(nsp, {
          emit: "join_auction",
          ...dataObj,
        });
      });
  }
  initChat(dataObj) {
    const nspName = "chat";
    this.setNsp(nspName)
      .connect(nspName)
      .then((nsp) => {
        this.sendEmit(nsp, {
          emit: "join_chat",
          ...dataObj,
        });
      });
  }
  initEvent(dataObj) {
    const nspName = "event";
    this.setNsp(nspName)
      .connect(nspName)
      .then((nsp) => {
        this.sendEmit(nsp, {
          emit: "join_event",
          ...dataObj,
        });
      });
  }

  setNsp = (name) => {
    this.nsp[name] = io(`/${name}`);
    this.curr = name;
    return this;
  };

  getNsp = () => {
    return this;
  };

  connect = (name) => {
    return new Promise((resolve, reject) => {
      this.nsp[name].on("connect", () => {
        resolve(this.nsp[name]);
      });
    });
  };

  // dataObj = {emit, ...input}
  sendEmit = (nsp, dataObj) => {
    const { emit, ...inputData } = dataObj;
    console.log("@@@@@@@", emit);
    nsp.emit(emit, inputData);
  };

  connectAuction(room) {
    this.nsp["auction"] = io("/auction");
    this.nsp["auction"].on("connect", (socket) => {
      this.nsp["auction"].emit("joinAuction", "옥션룸", "uid 나나나");
    });
    this.nsp["auction"].on("join_auction", () => {
      console.log("엣헴");
    });
    this.nsp["auction"].on("leave_auction", () => {
      console.log("엣헴");
    });
  }

  /**
   *
   * @param {String} name
   */

  //   setData = (name, na, callBack) => {
  //     this.nsp[name].on(`join_${name}`), (socket) => callBack(socket);
  //     return this;
  //   };
  //   setLeave = (name, na, callBack) => {
  //     this.nsp[name].on(`leave_${name}`), (socket) => callBack(socket, na);
  //     return this;
  //   };
}

const clientManager = new ClientManager();

clientManager.initEvent({uid:"뀨뀨뀨", room:"쀼쀼쀼"})
clientManager.initAuction({uid:"뀨뀨뀨", room:"쀼쀼쀼"})
clientManager.initChat({uid:"뀨뀨뀨", room:"쀼쀼쀼"})

// auction.on("connect", (socket) => {
//   auction.emit("join_auction","옥션룸", "uid 나나나")
// });

// clientManager.setNsp("auction")
// clientManager.connect("join_auction")

// const event_nsp = io("/event");
// event_nsp.on("connect", (socket) => {
//   console.log("이벤트뀨");
// });

// const chat_nsp = io("/chat");
// chat_nsp.on("connect", (socket) => {
//   console.log("채팅뀨");
// });
