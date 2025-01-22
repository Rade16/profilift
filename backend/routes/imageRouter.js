const Router = require("express");
const router = new Router();
const multer = require("../middleware/multer");
const imageController = require("../controllers/imageController");

router.get("/getAll", imageController.getAll);
router.post("/create", multer.single("image"), imageController.create);
router.delete("/delete/:id", imageController.delete);

module.exports = router;
