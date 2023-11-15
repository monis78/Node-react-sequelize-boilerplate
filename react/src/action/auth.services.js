import axios from "axios";
import { BASE_URL } from "../config/config";
import { registerGoogleUserURL, loginUserURL, signupUserURL } from "./constant";

export const loginSignupGoogleUser = (token) => {
  return axios.post(`${BASE_URL}${registerGoogleUserURL}`, {
    accessToken: token,
  });
};

export const loginUser = (userDetails) => {
  return axios.post(`${BASE_URL}${loginUserURL}`, {
    ...userDetails,
  });
};

export const signupUser = (userDetails) => {
  return axios.post(`${BASE_URL}${signupUserURL}`, {
    ...userDetails,
  });
};
