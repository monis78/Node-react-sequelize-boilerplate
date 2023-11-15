import { toast } from "react-toastify";
import { deleteBlog } from "../action/blogs.services";
import useGetBlogDetails from "../action/useGetBlogDetails";
import { useNavigate } from "react-router-dom";
import CommentContainer from "../component/CommentContainer";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { data: blog, error, isLoading, blogId } = useGetBlogDetails();
  const handleClick = () => {
    deleteBlog(blog.id).then(() => {
      toast.success("Blog deleted successfully");
      navigate("/");
    });
  };

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
        <CommentContainer blogId={blogId} />
      </div>
    </>
  );
};

export default BlogDetails;
