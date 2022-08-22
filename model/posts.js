const Sequelize = require("sequelize");
const { parseArgs } = require("util");
const { EDITOR_GRADE, NORMAL_GRADE, ADMIN_GRADE } = require("./constants");


class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      //컬럼설정
      {
        msg: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      //테이블설정
      {
        sequelize,
        timestamps: true,
        modelName: "Post",
        tableName: "posts",
        paranoid: "false",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    // belongsTo 함수를 사용해서 User 테이블과 연결 이 테이블이 자식
    // belongsTo 첫번째 매개변수는 연결될 테이블 이름
    // User의 id 타겟이고 연결해주는 키는 user_id
    db.Post.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
  }
}

module.exports = Post;
