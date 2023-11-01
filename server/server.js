const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const passport = require("passport");
const morgan = require("./config/morgan");
const routes = require("./routes/v1");
const logger = require("./config/logger");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID } = require("./config/constant");
const GoogleTokenStrategy = require("passport-google-token").Strategy;
const db = require("./Models");

const app = express();

if (process.env !== "test") {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// parse cookie
app.use(cookieParser());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// jwt authentication
passport.use(
  new GoogleTokenStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(accessToken, refreshToken, profile);
      return done(null, profile);
    }
  )
);
app.use(passport.initialize());

db.sequelize.sync();
// v1 api routes
app.use("/v1", routes);

app.listen(process.env.PORT || "5000", () => {
  logger.info(`Listening to port ${process.env.PORT || "5000"}`);
});

module.exports = app;
