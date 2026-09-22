import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link
        to="/"
        className="navbar-logo"
      >

        <div className="logo-icon">
          <span>◆</span>
        </div>

        <div>
          <h2>CourseHub</h2>

          <p>
            Learn • Grow • Build Your Future
          </p>
        </div>

      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/courses">
          Courses
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/browse-courses">
          Browse
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

      </div>

      <div className="nav-actions">

        <Link
          to="/search"
          className="search-button"
        >
          🔍
        </Link>

        <Link
          to="/login"
          className="login-button"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="register-button"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;