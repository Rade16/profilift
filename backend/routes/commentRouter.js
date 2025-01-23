const Router = require("express");
const router = new Router();

const commentController = require("../controllers/commentController");

router.get("/getAll", commentController.getAll);
router.post("/create", commentController.create);
router.delete("/delete/:id", commentController.delete);

module.exports = router;
