const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const imageRouter = require("./imageRouter");
const commentRouter = require("./commentRouter");

router.use("/user", userRouter);
router.use("/image", imageRouter);
router.use("/comment", commentRouter);

module.exports = router;
