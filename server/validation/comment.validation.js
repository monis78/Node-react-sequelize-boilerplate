const Joi = require("joi");
const db = require("../Models/index");

const req = require("express").request;
const res = require("express").response;

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const validateUserActionOnComment = async (req, res, next) => {
  const commentId = req.body.id;
  const isUserComment = await db.comment.findOne({
    where: {
      id: commentId,
      UserId: req.user.id,
    },
  });

  if (!isUserComment) {
    res.status(401).send({
      message: "You are not authorized to edit this comment",
    });
  }
  next();
};
const validateCreateCommentReq = async (req, res, next) => {
  const commentSchema = Joi.string().required();
  // commentSchema.validate()
  next();
};

module.exports = {
  validateCreateCommentReq,
  validateUserActionOnComment,
};
