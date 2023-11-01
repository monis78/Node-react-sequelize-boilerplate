import { blogs, myBlogs } from "./constant";
import { axiosInstance } from "../config/https";

export const getMyBlogs = () => {
  console.log("in here");
  return axiosInstance.get(`${myBlogs}`);
};

export const getBlogDetails = (blogId) => {
  return axiosInstance.get(`${blogs}${blogId}`);
};
