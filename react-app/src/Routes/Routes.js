import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../Page/Login";
import Signup from "../Page/Signup";
import Home from "../Page/Home";
import BlogDetails from "../Page/BlogDetails";
import MyBlogs from "../Page/MyBlogs";
import CreateBlog from "../Page/CreateBlog";
import PageNotFound from "../Page/PageNotFound";
import UnAuthorizeAccessRoute from "./UnAuthorizeAccessRoute";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <ProtectedRoutes>
                <Login />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoutes>
                <Signup />
              </ProtectedRoutes>
            }
          />

          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route
            path="/myBlogs"
            element={
              <UnAuthorizeAccessRoute>
                <MyBlogs />
              </UnAuthorizeAccessRoute>
            }
          />
          <Route
            path="/create"
            element={
              <UnAuthorizeAccessRoute>
                <CreateBlog />
              </UnAuthorizeAccessRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
