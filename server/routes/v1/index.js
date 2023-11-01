const express = require("express");
const authRoute = require("./auth.route");
const blogRoute = require("./blog.route");

const router = express.Router();

router.use("/user", authRoute);
router.use("/blog", blogRoute);

module.exports = router;
