var jwt = require("jsonwebtoken");
const { JWT_SECRET_TOKEN_KEY } = require("../config/constant");

const createJsonToken = (name, email) => {
  const token = jwt.sign(
    {
      name: name,
      email: email,
    },
    JWT_SECRET_TOKEN_KEY,
    { expiresIn: 60 * 60 * 100 }
  );
  return token;
};
module.exports = {
  createJsonToken,
};
