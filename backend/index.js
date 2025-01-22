require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./db");
const PORT = process.env.PORT || 6000;
const router = require("./routes/index");
const path = require("path");

const app = express();
app.use("/covers", express.static(path.join(__dirname, "public", "covers")));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
