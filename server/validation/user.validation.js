const Joi = require("joi");

const req = require("express").request;
const res = require("express").response;

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const validateUserLoginRequest = (req, res, next) => {
  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  next();
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const validateUserSignupRequest = (req, res, next) => {
  Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  next();
};

module.exports = {
  validateUserLoginRequest,
  validateUserSignupRequest,
};
