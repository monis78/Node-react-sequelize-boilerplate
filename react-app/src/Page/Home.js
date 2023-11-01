import React from "react";
import BlogList from "../component/BlogList";

const Home = () => {
  return (
    <div>
      <BlogList
        blogs={[
          { id: 123, title: "monis", author: "123" },
          { id: 123, title: "monis", author: "123" },
          { id: 123, title: "monis", author: "123" },
        ]}
      />
    </div>
  );
};

export default Home;
