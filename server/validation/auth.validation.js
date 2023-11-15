const { default: axios } = require("axios");
const {
  VALIDATE_GOOGLE_ACCESS_TOKEN,
  JWT_SECRET_TOKEN_KEY,
} = require("../config/constant");
var jwt = require("jsonwebtoken");
const db = require("../Models");

const req = require("express").request;
const res = require("express").response;
/**
 * @param {req} req The date
 * @param {res} res The string
 */
const validateGoogleUser = async (req, res, next) => {
  try {
    const getUserDetails = await axios.get(
      `${VALIDATE_GOOGLE_ACCESS_TOKEN}${req.body.accessToken}`
    );
    req.user = getUserDetails.data;
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
  next();
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    var decoded = jwt.verify(token, JWT_SECRET_TOKEN_KEY);
    if (decoded) {
      const getUserDetails = await db.user.findOne({
        where: {
          email: decoded.email,
        },
      });
      req.user = getUserDetails.dataValues;
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = {
  validateGoogleUser,
  authenticateUser,
};
