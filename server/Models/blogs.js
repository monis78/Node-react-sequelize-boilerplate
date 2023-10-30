"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");

/**
@param {Sequelize} sequelize
@param {DataTypes} DataTypes
*/
module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blogs.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Blogs",
    }
  );
  return Blogs;
};
