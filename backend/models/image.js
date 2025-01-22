const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../db");
const Image = sequelize.define("image", {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Image };
