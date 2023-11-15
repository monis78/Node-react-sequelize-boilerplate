const express = require("express");
const authRoute = require("./auth.route");
const blogRoute = require("./blog.route");
const commentRoute = require("./comment.route");

const router = express.Router();

router.use("/user", authRoute);
router.use("/blog", blogRoute);
router.use("/comment", commentRoute);

module.exports = router;
