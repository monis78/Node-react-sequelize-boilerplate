import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { loginUser, loginSignupGoogleUser } from "../action/auth.services";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    // upload profile pic on amazon and add the link here
    profilePicture: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const onInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onGoogleLoginClick = async (token) => {
    try {
      const isLoggedInSuccess = await loginSignupGoogleUser(token);
      Cookies.set("token", isLoggedInSuccess.data.data.accessToken);
      navigate("/");
    } catch (error) {
      console.error("Error Logging in user", error);
    }
  };

  const onManualLogin = (e) => {
    e.preventDefault();
    console.log(userDetails);
    loginUser(userDetails);
  };

  return (
    <div className="loginScreen">
      <h2>Signup</h2>
      <form className="loginFormContainer">
        <div className="formController">
          <label htmlFor="profilePicture">profile Picture</label>
          <input
            required
            name="profilePicture"
            type="file"
            placeholder="Enter Password"
            value={userDetails.profilePicture}
            onChange={onInputChange}
          />
        </div>
        <div className="formController">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            required
            name="name"
            placeholder="Enter User Name"
            value={userDetails.email}
            onChange={onInputChange}
          />
        </div>
        <div className="formController">
          <label htmlFor="userName">Email</label>
          <input
            type="text"
            required
            name="email"
            placeholder="Enter User Email"
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
        <div className="formController">
          <label htmlFor="password">Confirm Password</label>
          <input
            required
            name="confirmPassword"
            type="password"
            placeholder="Re Enter Password"
            value={userDetails.password}
            onChange={onInputChange}
          />
        </div>
        <button className="button" onClick={onManualLogin}>
          Sign up
        </button>
      </form>
      <div style={{ padding: "16px" }}>OR</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            onGoogleLoginClick(credentialResponse.credential);
          }}
          text="signup_with"
          width={"80"}
          shape="circle"
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default Signup;
