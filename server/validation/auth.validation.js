const { default: axios } = require("axios");
const {
  VALIDATE_GOOGLE_ACCESS_TOKEN,
  JWT_SECRET_TOKEN_KEY,
} = require("../config/constant");
var jwt = require("jsonwebtoken");

const req = require("express").request;
const res = require("express").response;
/**
 * @param {req} req The date
 * @param {res} res The string
 */
const validateGoogleUser = async (req, resp, next) => {
  try {
    const getUserDetails = await axios.get(
      `${VALIDATE_GOOGLE_ACCESS_TOKEN}${req.body.accessToken}`
    );
    req.user = getUserDetails.data;
  } catch (error) {
    console.error(error);
  }
  next();
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const authenticateUser = async (req, res, next) => {
  console.log("in here", req.headers.authorization);
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    var decoded = jwt.verify(token, JWT_SECRET_TOKEN_KEY);
    if (decoded) {
      req.user = decoded;
    }
    next();
  } catch (err) {
    // console.error(err);
    res.status(401).send({ message: "Invalid Token" });
  }
};

module.exports = {
  validateGoogleUser,
  authenticateUser,
};
