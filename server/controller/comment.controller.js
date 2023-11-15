const db = require("../Models");
const {
  addCommentParentChildRelation,
} = require("./parent_child_comment.controller");

const req = require("express").request;
const res = require("express").response;

const createComment = async (req, res, next) => {
  try {
    const createComment = await db.comment.create(
      {
        blogId: req.body.blogId,
        comment: req.body.comment,
        userId: req.user.id,
      },
      {
        raw: true,
      }
    );
    console.log(createComment);
    if (createComment) {
      await addCommentParentChildRelation(
        req.body.parentCommentId,
        createComment.dataValues.id
      );
      return res.send({
        message: "comment posted successfully",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal server error",
    });
  }
};

const getRecentComments = async (req, res, next) => {
  try {
    const commentList = await db.comment.findAll({
      // attributes: ["parentCommentId"],
      raw: true,
      nest: true,
      where: {
        blogId: req.params.blogId,
      },
      include: [
        {
          model: db.parent_child_comment,
          where: {
            parentCommentId: null,
          },
          attributes: [],
        },
        {
          model: db.user,
        },
      ],
    });
    res.send({ data: commentList });
  } catch (error) {
    console.error(error);
  }
};

const deleteComment = async (req, res, next) => {
  await db.comment.destroy({
    where: {
      id: req.body.comment,
    },
  });
  res.status(200).send({
    message: "comment deleted successfully",
  });
};
const editComment = async (req, res, next) => {
  await db.comment.update(
    {
      where: {
        id: req.body.id,
      },
    },
    {
      comment: req.body.comment,
    }
  );

  res.status(200).send({
    message: "updated successfully",
  });
};

module.exports = {
  createComment,
  getRecentComments,
  deleteComment,
  editComment,
};
