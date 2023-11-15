"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");

/**
@param {Sequelize} sequelize
@param {DataTypes} DataTypes
*/
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define("comment", {
    blogId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  });
  return comment;
};
