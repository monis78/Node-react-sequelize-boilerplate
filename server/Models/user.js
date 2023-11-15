"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");

/**
@param {Sequelize} sequelize
@param {DataTypes} Sequelize
*/
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
  });

  return User;
};
