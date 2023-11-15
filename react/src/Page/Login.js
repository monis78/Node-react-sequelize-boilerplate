import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { loginUser, loginSignupGoogleUser } from "../action/auth.services";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onGoogleLoginClick = async (token) => {
    try {
      const isSignupSuccessFull = await loginSignupGoogleUser(token);
      Cookies.set("token", isSignupSuccessFull.data.data.accessToken);
      navigate("/");
    } catch (error) {
      console.error("Error Logging in user", error);
    }
  };

  const onManualLogin = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      const getUserDetails = await loginUser(userDetails);
      Cookies.set("token", getUserDetails.data.data.accessToken);
      navigate("/");
    } catch (error) {
      toast.error("Invalid user details please try again");
    }
  };

  return (
    <div className="loginScreen">
      <h2>Login</h2>
      <form className="loginFormContainer">
        <div className="formController">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            required
            name="email"
            placeholder="Enter User Name"
            value={userDetails.email}
            onChange={onInputChange}
          />
        </div>
        <div className="formController">
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            type="password"
            placeholder="Enter Password"
            value={userDetails.password}
            onChange={onInputChange}
          />
        </div>
        <button className="button" onClick={onManualLogin}>
          Login
        </button>
      </form>
      <div style={{ padding: "16px" }}>OR</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "50%" }}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              onGoogleLoginClick(credentialResponse.credential);
            }}
            context=""
            shape="circle"
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
