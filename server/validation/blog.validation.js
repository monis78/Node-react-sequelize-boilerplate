const Joi = require("joi");
const db = require("../Models");

const req = require("express").request;
const res = require("express").response;

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const validateCreateBlogReq = (req, res, next) => {
  Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });
  next();
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const validateEditBlogReq = (req, res, next) => {
 const editUserPayloadSchema =  Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
  }).or("title", "description");
  const isValid = editUserPayloadSchema.validate(req.body)
  next();
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const validateDeleteBlogReq = (req, res, next) => {
  Joi.string().required();
  next();
};

const validateUserAction = async (req, res, next) => {
  const blogId = req.params.blogId;
  const isUserBlog = await db.blogs.findOne({
    where: {
      id: blogId,
      UserId: req.user.id,
    },
  });

  if (!isUserBlog) {
    res.status(401).send({
      message: "You are not authorized to edit this blog",
    });
  }
  next();
};

module.exports = {
  validateCreateBlogReq,
  validateDeleteBlogReq,
  validateUserAction,
  validateEditBlogReq,
};
