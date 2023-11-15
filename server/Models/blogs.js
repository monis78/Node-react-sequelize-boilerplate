"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");

/**
@param {Sequelize} sequelize
@param {DataTypes} Sequelize
*/
module.exports = (sequelize, DataTypes) => {
  const Blogs = sequelize.define("Blogs", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  });

  return Blogs;
};
