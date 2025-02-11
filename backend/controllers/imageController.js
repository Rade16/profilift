const { Image } = require("../models/image");

class ImageController {
  async getAll(req, res) {
    const images = await Image.findAll();
    res.json(images);
  }
  async create(req, res) {
    const url = req.file
      ? `http://localhost:3000/uploads/${req.file.filename}`
      : null;
    const image = await Image.create({ url });
    res.json(image);
  }
  async delete(req, res) {
    const { id } = req.params;
    const image = await Image.destroy({ where: { id } });
    res.json(image);
  }
}

module.exports = new ImageController();
