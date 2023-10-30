const Joi = require("joi");

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
const validateDeleteBlogReq = (req, res, next) => {
  Joi.object({
    blogId: Joi.string().required(),
  });
  next();
};

module.exports = {
  validateCreateBlogReq,
  validateDeleteBlogReq,
};
