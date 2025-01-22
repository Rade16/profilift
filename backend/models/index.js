const sequelize = require("../db");

const { Comment } = require("./Comment");
const { Image } = require("./image");
const { User } = require("./User");

module.exports = {
  sequelize,
  Comment,
  Image,
  User,
};
