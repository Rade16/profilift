const multer = require("multer");
const path = require("path");

// Функция для создания хранилища с заданным путем
const createStorage = (uploadPath) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

// Генерация `multer`-загрузчика для заданного пути
const createUploader = (uploadPath) =>
  multer({ storage: createStorage(uploadPath) });

module.exports = {
  coversUploader: createUploader("public/covers"),
  filmsUploader: createUploader("public/films"),
  musicUploader: createUploader("public/music"),
  musicImageUploader: createUploader("public/musicImage"),
  usersUploader: createUploader("public/users"),
};
