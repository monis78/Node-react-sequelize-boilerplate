const req = require("express").request;
const res = require("express").response;

const createComment = (req, res, next) => {
  
};

const getRecentComments = () => {};

const getCommentDetailsByPostId = (req, res, next) => {
  console.log(req.params.blogId);
  // find comment by post id
  const isCommentPresent = true;
  if (isCommentPresent) {
    res.send({});
  } else {
    res.status(200).send({
      message: "Comment not found",
    });
  }
};

const deleteComment = () => {};
const editComment = () => {};

module.exports = {
  createComment,
  getRecentComments,
  getCommentDetailsByPostId,
  deleteComment,
  editComment,
};
