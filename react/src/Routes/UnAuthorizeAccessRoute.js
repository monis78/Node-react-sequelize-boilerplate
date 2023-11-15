import Cookies from "js-cookie";
import React from "react";
import { Navigate } from "react-router-dom";

const UnAuthorizeAccessRoute = ({ children }) => {
  const isLoggedIn = Boolean(Cookies.get("token"));
  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default UnAuthorizeAccessRoute;
