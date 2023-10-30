const express = require("express");
const blogController = require("../../controller/blog.controller");
const { validateCreateBlogReq } = require("../../validation/blog.validation");
const { authenticateUser } = require("../../validation/auth.validation");

const router = express.Router();

router.get("/", blogController.getRecentBlogs);
router.get("/myBlogs", authenticateUser, blogController.myBlogs);
router.get("/:blogId", blogController.getBlogDetailsById);
router.post(
  "/",
  authenticateUser,
  validateCreateBlogReq,
  blogController.createBlog
);
router.delete(
  "/",
  authenticateUser,
  validateCreateBlogReq,
  blogController.deleteBlog
);
router.delete(
  "/",
  authenticateUser,
  validateCreateBlogReq,
  blogController.editBlog
);
module.exports = router;
