const { Comment } = require("../models/index");

class CommentController {
  async create(req, res) {
    try {
      const comment = await Comment.create(req.body);
      return res.json(comment);
    } catch (e) {
      console.log(e);
    }
  }
  async getAll(req, res) {
    try {
      const comments = await Comment.findAll();
      return res.json(comments);
    } catch (e) {
      console.log(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const comment = await Comment.destroy({ where: { id } });
      return res.json(comment);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new CommentController();
