const { User } = require("./../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const generateAccessToken = (id, username) => {
  const payload = {
    id,
    username,
  };
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });
};

class UserController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation error", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ where: { username } });
      if (candidate) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ username, password: hashPassword });
      const token = generateAccessToken(user.id, user.username);
      return res.json({ token });
    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Wrong password" });
      }
      const token = generateAccessToken(user.id, user.username);
      return res.json({ token });
    } catch (e) {
      console.log(e);
    }
  }

  async auth(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.user.id } });
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }

      const token = generateAccessToken(user.id);
      return res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
