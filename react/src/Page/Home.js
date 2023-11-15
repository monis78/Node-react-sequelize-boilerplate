import React, { useEffect, useState } from "react";
import BlogList from "../component/BlogList";
import { getAllBlogs } from "../action/blogs.services";

const Home = () => {
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    getAllBlogs()
      .then((response) => {
        console.log(response);
        setBlogList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setBlogList([]);
  }, []);
  return (
    <div>
      <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;
