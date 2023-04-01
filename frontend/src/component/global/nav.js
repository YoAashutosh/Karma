import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  const location = useLocation();
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/admin" ||
    location.pathname === "/form" ||
    location.pathname === "/admin/product" ||
    location.pathname === "/calendar" ||
    location.pathname === "/tenderForm"
  ) {
    return null;
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h1>Karma</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="justify-content-end   w-60">
            <ul className="nav justify-content-between text-dark">
              <NavLink
                className="nav-link text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>

              <NavLink className="nav-link text-dark" to="/service">
                Service
              </NavLink>

              <NavLink className="nav-link text-dark" to="/about">
                About Us
              </NavLink>

              <NavLink className="nav-link text-dark" to="/news">
                News
              </NavLink>
              <NavLink className="nav-link text-dark" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-link text-dark" to="/login">
                Login
              </NavLink>
              <NavLink
                className="signup nav-link d-flex justify-content-center align-items-center"
                to="/signup"
              >
                Sign Up
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
