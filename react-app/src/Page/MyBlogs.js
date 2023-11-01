import React, { useEffect, useState } from "react";
import BlogList from "../component/BlogList";
import { getMyBlogs } from "../action/blogs.services";

const MyBlogs = () => {
  const [myBlogList, setMyBlogList] = useState([]);
  useEffect(() => {
    getMyBlogs()
      .then((response) => {
        setMyBlogList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setMyBlogList([]);
  }, []);

  return (
    <div>
      <div>MyBlogs</div>
      {myBlogList.length ? (
        <BlogList blogs={myBlogList} />
      ) : (
        <div>You have not added any blogs yet, write now</div>
      )}
    </div>
  );
};

export default MyBlogs;
