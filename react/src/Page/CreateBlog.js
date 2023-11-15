import { useState } from "react";
import { createNewBlog } from "../action/blogs.services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, description };
    const isBlogCreated = await createNewBlog(blog);
    console.log(isBlogCreated);
    if (isBlogCreated) {
      navigate("/myBlogs");
      toast.success("Blog created successfully");
    }
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="button">Add Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
