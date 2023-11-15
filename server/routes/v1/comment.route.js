const express = require("express");
const commentController = require("../../controller/comment.controller");
const { authenticateUser } = require("../../validation/auth.validation");
const {
  validateCreateCommentReq,
  validateUserActionOnComment,
} = require("../../validation/comment.validation");

const router = express.Router();

router.get("/:blogId", commentController.getRecentComments);
router.post(
  "/",
  authenticateUser,
  validateCreateCommentReq,
  commentController.createComment
);
router.delete(
  "/",
  authenticateUser,
  validateUserActionOnComment,
  commentController.deleteComment
);
// router.delete(
//   "/",
//   authenticateUser,
//   validateCreateCommentReq,
//   commentController.editComment
// );
module.exports = router;
