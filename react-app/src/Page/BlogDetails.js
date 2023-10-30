import useGetBlogDetails from "../action/useGetBlogDetails";

const BlogDetails = () => {
  const { data: blog, error, isLoading } = useGetBlogDetails();
  const handleClick = () => {};

  return (
    <>
      <div className="blog-details">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.description}</div>
            <button onClick={handleClick}>delete</button>
          </article>
        )}
      </div>
      <div>
        <h3>Comments</h3>
      </div>
    </>
  );
};

export default BlogDetails;
