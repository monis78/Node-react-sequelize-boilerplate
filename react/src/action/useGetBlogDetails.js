import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogDetails } from "./blogs.services";

const useGetBlogDetails = () => {
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(false);
      setError(setError);
      try {
        const blogDetails = await getBlogDetails(blogId);
        setBlogDetails(blogDetails);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, [blogId]);

  return {
    isLoading: isLoading,
    error: error,
    data: blogDetails.data,

    blogId: blogId,
  };
};

export default useGetBlogDetails;
