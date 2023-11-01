"use strict";
const { Model, Sequelize, DataTypes } = require("sequelize");

/**
  @param {Sequelize} sequelize
  @param {DataTypes} DataTypes
  */
module.exports = (sequelize, DataTypes) => {
  class parent_child_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  parent_child_comment.init(
    {
      parentCommentId: DataTypes.STRING,
      childCommentId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "parent_child_comment",
    }
  );
  return parent_child_comment;
};
