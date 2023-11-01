import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogDetails } from "./blogs.services";

const useGetBlogDetails = () => {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    setError(setError);
    getBlogDetails(blogId)
      .then((blogDetails) => {
        setBlogDetails(blogDetails);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [blogId]);

  return {
    isLoading: isLoading,
    error: error,
    data: blogDetails.data,
  };
};

export default useGetBlogDetails;
