const req = require("express").request;
const res = require("express").response;

const createBlog = () => {};

const getRecentBlogs = () => {};
const getBlogDetailsById = (req, res, next) => {
  console.log(req.params.blogId);
  // find blog by id
  const isBlogPresent = true;
  if (isBlogPresent) {
    res.send({
      title: "Awesome Blog",
      id: 123,
      description: "this is a new interesting blog",
      author: "very smart author",
    });
  } else {
    res.status(404).send({
      message: "Blog not found",
    });
  }
};
const myBlogs = (req, res, next) => {
  if (req.user) {
    // find Blogs by user ID
    console.log(req.user.email);
    // find user by email
    if (req.user.email) {
      res.status(200).send({
        data: [],
      });
    } else {
      res.status(500).send({
        message: "Internal server error",
      });
    }
  }
};
const deleteBlog = () => {};
const editBlog = () => {};

module.exports = {
  createBlog,
  getRecentBlogs,
  getBlogDetailsById,
  myBlogs,
  deleteBlog,
  editBlog,
};
