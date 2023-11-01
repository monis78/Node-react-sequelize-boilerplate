var jwt = require("jsonwebtoken");
const { JWT_SECRET_TOKEN_KEY } = require("../config/constant");
var bcrypt = require("bcrypt");
const { createJsonToken } = require("../utils/common-method");

const req = require("express").request;
const res = require("express").response;

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const register = (req, res, next) => {
  if (req.user) {
    const token = createJsonToken(req.user.name, req.user.email);
    console.log(token, "token", req.user);
    console.log(token);
    res.status(200).json({
      message: "success",
      data: {
        user: {
          name: req.user.name,
          email: req.user.email,
          image: req.user.picture,
        },
        accessToken: token,
      },
    });
  } else {
    res.status(401).json({ message: "Invalid Token" });
  }
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const login = (req, res, next) => {
  // find and validate user
  // find user by email ID
  const getUserDetails = {};
  bcrypt.compare(
    "myPlaintextPassword",
    req.body.password,
    function (err, result) {
      // console.log(result);
      const token = createJsonToken(getUserDetails.name, getUserDetails.email);
      res.send({
        data: {
          user: {
            name: getUserDetails.name,
            email: getUserDetails.email,
            image: getUserDetails.picture,
          },
          accessToken: token,
        },
      });
    }
  );
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const signUp = (req, res, next) => {
  // create user here
  console.log(req.body);
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    console.log(hash);
    // store hash password in db here
  });
};

module.exports = {
  register,
  login,
  signUp,
};
