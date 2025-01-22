const Router = require("express");
const router = new Router();

const imageController = require("../controllers/imageController");

router.get("/get", imageController.getAll);
router.post("/create", imageController.create);
router.delete("/delete/:id", imageController.delete);

module.exports = router;
