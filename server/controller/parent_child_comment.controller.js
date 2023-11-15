const db = require("../Models");

const req = require("express").request;
const res = require("express").response;

const addCommentParentChildRelation = async (
  parentCommentId = null,
  childCommentId
) => {
  try {
    const createCommentRelationship = await db.parent_child_comment.create({
      parentCommentId: parentCommentId || null,
      childCommentId: childCommentId,
    });
  } catch (error) {
    console.error(error);
  }
};

const deleteCommentsParentChildRelation = async (req, res, next) => {
  await db.parent_child_comment.destroy({
    where: {
      id: req.body.comment,
      parentCommentId: req.body.comment,
      childCommentId: req.body.childCommentId,
    },
  });
};

module.exports = {
  addCommentParentChildRelation,
  deleteCommentsParentChildRelation,
};
