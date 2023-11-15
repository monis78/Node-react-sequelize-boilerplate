import { blogs, myBlogs } from "./constant";
import { axiosInstance } from "../config/https";

export const getMyBlogs = () => {
  return axiosInstance.get(`${myBlogs}`);
};

export const getBlogDetails = (blogId) => {
  return axiosInstance.get(`${blogs}${blogId}`);
};

export const createNewBlog = (blogDetails) => {
  return axiosInstance.post(`${blogs}`, {
    ...blogDetails,
  });
};

export const getAllBlogs = () => {
  return axiosInstance.get(`${blogs}`);
};

export const deleteBlog = (blogId) => {
  return axiosInstance.delete(`${blogs}${blogId}`);
};
