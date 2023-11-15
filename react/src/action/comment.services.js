import { axiosInstance } from "../config/https";
import { comments } from "./constant";

export const getBlogComments = (blogId) => {
  return axiosInstance.get(`${comments}${blogId}`);
};

export const createComment = (blogId, commentValue, parentCommentId = "") => {
  return axiosInstance.post(comments, {
    comment: commentValue,
    parentCommentId: parentCommentId,
    blogId: blogId,
  });
};
