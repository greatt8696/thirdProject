const express = require("express");
const ejs = require("ejs");
const path = require("path");
// 이렇게 폴더 경로까지만 잡으면 index 탐색 찾은 index파일을 가져옴.
const { sequelize, User, Post } = require("./model");
const { fstat } = require("fs");
const { createUid } = require("./util/createRandom");

const app = express();

const PORT = 3000;

// // join함수는 매개변수를 받아 주소처럼 합쳐줌
// // path.join('a','b') => "a/b"
// // views 폴더까지의 경로가 기본값 렌더링할 파일을 모아둔 폴더
// // app.set express에 값을 저장가능 밑에 구문은 view키에 주소값을 넣은 부분
app.set("views", path.join(__dirname, "view"));

app.engine("html", ejs.renderFile);

app.set("view engine", "html");

// //body 객체 사용
app.use(express.urlencoded({ extended: false }));

// // sequelize 구성 연결 및 테이블 생성 여기가 처음 매핑
// // sync 함수는 데이터베이스 동기화하고 필요한 테이블을 생성해준다.
// // 필요한 테이블들이 생기고 매핑된다.
// // 테이블 내용이 다르면 먼저 오류를 뱉어냄s
// // CREATE TABLE 구문이 여기서 실행됨.
// // force 강제실행 초기화 시킬것인지(테이블 초기화 할것인지)
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("DB연결 성공");

    User.create({
      uid: createUid(),
      pwd: "쀼쀼쀼쀼쀼",
      name: "name",
      email: "뀨뀨뀨뀨뀨뀨뀨@naver.com",
      balance: 987654321098765,
      grade:0,
      gallery : JSON.stringify([createUid(), createUid(), createUid(), createUid()])
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => {
//   res.render("create");
// });
// app.post("/create", (req, res) => {
//   // create이 함수를 사용하면 해당 테이블에 컬럼을 추가할 수 이다.
//   const { name, age, msg } = req.body;
//   const create = User.create({
//     name,
//     age,
//     msg,
//   });
// });

// app.get("/user", (req, res) => {
//   // 여기서는 추가된 유저를 확인해야한다.
//   // user 전체를 조회하거나  조건으로  user 를 가져와야한다.
//   User.findAll({})
//     .then((data) => {
//       // Post.findAll({ where: { name: data.id } });

//       res.render("page", { data });
//     })
//     .catch((err) => {
//       //실패하면 에러 페이지를 보여준다.
//       res.render("err");
//     });
// });

// app.post("/create_post", (req, res) => {
//   const { name, text } = req.body;
//   console.log(name, text);
//   User.findOne({ where: { name: name } }).then((e) => {
//     Post.create({
//       msg: text,
//       // foreignkey user_id 이고 유저
//       user_id: e.id,
//       name,
//     });
//   });
// });

// app.get("/view/:name", (req, res) => {
//   User.findOne({
//     where: {
//       name: req.params.name,
//     },
//     // 리턴값을 단일 객체로 변형해서
//     // raw: true,
//     // 관계형 모델 불러오기
//     // 관계를 맺어 놓은 모델을 조회할 수 있다.
//     // 여기서는 해당 검색된 유저와 맞는 모델
//     // user 모델 id가 1번이면 post 모델의 user_id 키가 같은 애들을 조회
//     include: [
//       {
//         model: Post,
//       },
//     ],
//   }).then((e) => {
//     // console.log(e);
//     e.dataValues.Post = e.dataValues.Posts.map((i) => i.dataValues);
//     const Posts = e.dataValues;
//     console.log(Posts);
//     res.render("view", { data: Posts });
//   });
// });

// app.get("/del/:id", (req, res) => {
//   //삭제 쿼리문
//   Post.destroy({
//     where: { id: req.params.id },
//   }).then(() => {
//     res.redirect("/user");
//   });
// });
// app.post("/view_update", (req, res) => {
//   const { id, msg, text } = req.body;
//   /**
//    * 수정 쿼리문 사용
//    * 객체가 들어가는데
//    * 첫번째 매개변수 : 수정할 내용
//    * 두번째 매개변수 : 검색조건
//    */
//   Post.update({ msg }, { where: { id, msg: text } });
// });

// app.listen(PORT, () => {
//   console.log(PORT, "번 포트 열림");
// });
