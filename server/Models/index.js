const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// /**
//  *  @param {Sequelize} Sequelize
//  */
// const Sequelize = require("sequelize");
/**
 *  @type {import("sequelize")} sequelize return type will come here
 */
const sequelize = new Sequelize(
  "ciirwodx",
  "ciirwodx",
  "wiLFxXDArPWBwSyA4EpDbxVQ9H7bmNgh",
  {
    dialect: dbConfig.dialect,
    host: "rain.db.elephantsql.com",
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.blogs = require("./blogs.js")(sequelize, Sequelize);
db.comment = require("./comment.js")(sequelize, Sequelize);
db.parent_child_comment = require("./parent_child_comment.js")(
  sequelize,
  Sequelize
);
db.user.hasMany(db.blogs);
db.blogs.belongsTo(db.user);
db.blogs.hasMany(db.comment, {
  foreignKey: "blogId",
});
db.user.hasMany(db.comment, {
  foreignKey: "userId",
});
db.comment.belongsTo(db.user, {
  foreignKey: "userId",
});

db.comment.hasOne(db.parent_child_comment, {
  foreignKey: "childCommentId",
});

module.exports = db;
