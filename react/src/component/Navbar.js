import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setIsLoggedIn(Boolean(Cookies.get("token")));
  }, [location.pathname]);
  console.log(NavLink);
  return (
    <header>
      <nav className="navbar">
        <h1>The Blog Site</h1>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/myBlogs">My Blogs</NavLink>
              <NavLink
                to="/create"
                style={{
                  color: "white",
                  backgroundColor: "#f1356d",
                  borderRadius: "8px",
                }}
              >
                Create New Blog
              </NavLink>
              <button
                className="button"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  Cookies.remove("token");
                  setIsLoggedIn(false);
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/Login"
                style={{
                  color: "white",
                  backgroundColor: "#f1356d",
                  borderRadius: "8px",
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                style={{
                  color: "white",
                  backgroundColor: "#f1356d",
                  borderRadius: "8px",
                }}
              >
                Sign up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
