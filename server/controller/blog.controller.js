const db = require("../Models");

const req = require("express").request;
const res = require("express").response;

const createBlog = async (req, res, next) => {
  try {
    const isBlogCreated = await db.blogs.create({
      title: req.body.title,
      description: req.body.description,
      UserId: req.user.id,
    });
    res.status(200).send({
      message: "blog created successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: "internal server error",
    });
  }
};

const getRecentBlogs = async (req, res, next) => {
  const DEFAULT_DATA_SIZE = 10;
  const blogList = await db.blogs.findAll({
    limit: DEFAULT_DATA_SIZE,
    // offset: (req.params.pageNo + 1) * DEFAULT_DATA_SIZE,
    raw: true,
    nest: true,
    order: [["createdAt", "DESC"]],
  });
  // find blogs
  res.send({
    data: blogList,
  });
};

const getBlogDetailsById = async (req, res, next) => {
  const blogDetails = await db.blogs.findOne({
    attributes: ["description", "title", "id", "User.name"],
    where: {
      id: req.params.blogId,
    },
    include: { model: db.user, attributes: ["name", "id"], required: true },
  });
  // find blog by id
  if (blogDetails) {
    res.send({
      ...blogDetails.dataValues,
    });
  } else {
    res.status(404).send({
      message: "Blog not found",
    });
  }
};

const myBlogs = async (req, res, next) => {
  if (req.user) {
    // find Blogs by user ID
    // find user by email
    if (req.user.email) {
      const myBlogs = await db.blogs.findAll({
        where: {
          UserId: req.user.id,
        },
        raw: true,
        nest: true,
      });
      res.status(200).send({
        data: myBlogs,
      });
    } else {
      res.status(500).send({
        message: "Internal server error",
      });
    }
  }
};

const deleteBlog = async (req, res, next) => {
  console.log(req.params.blogId);
  const blogDetails = await db.blogs.destroy({
    where: {
      id: req.params.blogId,
    },
  });
  // find blog by id
  if (blogDetails) {
    res.send({
      message: "Blog deleted successfully",
    });
  } else {
    res.status(404).send({
      message: "Blog not found",
    });
  }
};

const editBlog = async (req, res, next) => {
  const blogDetails = await db.blogs.update(
    {
      where: {
        id: req.params.blogId,
      },
    },
    {
      ...req.body,
    }
  );
  // find blog by id
  if (blogDetails) {
    res.send({
      message: "Blog Updated successfully",
      data: blogDetails,
    });
  } else {
    res.status(404).send({
      message: "Blog not found",
    });
  }
};

module.exports = {
  createBlog,
  getRecentBlogs,
  getBlogDetailsById,
  myBlogs,
  deleteBlog,
  editBlog,
};
