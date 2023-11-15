var jwt = require("jsonwebtoken");
const { JWT_SECRET_TOKEN_KEY } = require("../config/constant");
var bcrypt = require("bcrypt");
const { createJsonToken } = require("../utils/common-method");
const db = require("../Models");

const req = require("express").request;
const res = require("express").response;

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const registerGoogleUser = async (req, res, next) => {
  console.log(req.user);
  try {
    if (req.user) {
      await db.user.create({
        email: req.user.email,
        name: req.user.name,
        profilePicture: "",
      });
      const token = createJsonToken(req.user.name, req.user.email);
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
  } catch (error) {
    res.status(500).json({ message: "Internal serer error" });
  }
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const login = (req, res, next) => {
  // find and validate user
  // find user by email ID
  const userDetails = db.user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((userDetails) => {
      if (!userDetails) {
        throw "User not found";
      }
      console.log(userDetails);
      bcrypt.compare(
        req.body.password,
        userDetails.dataValues.password,
        function (err, result) {
          if (!result) {
            res.status(401).send({
              message: "invalid email/password please try again",
            });
          }

          const token = createJsonToken(userDetails.name, userDetails.email);
          res.send({
            data: {
              user: {
                name: userDetails.name,
                email: userDetails.email,
                image: userDetails.profilePicture,
              },
              accessToken: token,
            },
          });
        }
      );
    })
    .catch(() => {
      res.status(400).send({
        message: "user not found",
      });
    });
};

/**
 * @param {req} req The date
 * @param {res} res The string
 */
const signUp = async (req, res, next) => {
  // create user here
  try {
    bcrypt.hash(req.body.password, 10, async (err, hash) => {
      const isDataAdded = await db.user.create({
        email: req.body.email,
        name: req.body.name,
        password: hash,
        profilePicture: "",
      });
      const token = createJsonToken(req.body.name, req.body.email);
      res.status(200).send({
        message: "Login successful",
        accessToken: token,
        user: {
          name: isDataAdded.name,
          email: isDataAdded.email,
          image: isDataAdded.profilePicture,
        },
      });
    });
  } catch (error) {
    console.error("error in creating user", error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  registerGoogleUser,
  login,
  signUp,
};
