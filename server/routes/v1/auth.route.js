const express = require("express");
const authController = require("../../controller/auth.controller");
const passport = require("passport");
const { validateGoogleUser } = require("../../validation/auth.validation");
const {
  validateUserLoginRequest,
  validateUserSignupRequest,
} = require("../../validation/user.validation");

const router = express.Router();

router.post("/googleLogin", validateGoogleUser, authController.register);

router.post("/login", validateUserLoginRequest, authController.login);
router.post("/signup", validateUserSignupRequest, authController.signUp);

// router.post("/logout", validate(authValidation.logout), authController.logout);

// router.post(
//   "/verify-email",
//   validate(authValidation.verifyEmail),
//   authController.verifyEmail
// );

module.exports = router;
