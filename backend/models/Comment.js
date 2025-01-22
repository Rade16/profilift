const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

const Comment = sequelize.define("comment", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Comment };
