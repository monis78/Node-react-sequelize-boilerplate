import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setIsLoggedIn(Boolean(Cookies.get("token")));
  }, [location.pathname]);

  return (
    <header>
      <nav className="navbar">
        <h1>The Blog Site</h1>
        <div className="links">
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/myBlogs">My Blogs</Link>
              <Link
                to="/create"
                style={{
                  color: "white",
                  backgroundColor: "#f1356d",
                  borderRadius: "8px",
                }}
              >
                Create New Blog
              </Link>
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
              <Link
                to="/Login"
                style={{
                  color: "white",
                  backgroundColor: "#f1356d",
                  borderRadius: "8px",
                }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                style={{
                  color: "white",
                  backgroundColor: "#f1356d",
                  borderRadius: "8px",
                }}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
