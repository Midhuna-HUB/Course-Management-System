import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email verification will be connected later.
    navigate("/reset-password");
  };

  return (
    <div className="forgot-page">

      {/* TOP BRAND */}

      <div className="forgot-brand">

        <Link to="/" className="forgot-brand-link">

          <div className="forgot-logo">
            ◆
          </div>

          <div>
            <h2>CourseHub</h2>
            <p>Learn • Grow • Build Your Future</p>
          </div>

        </Link>

      </div>


      {/* MAIN CONTENT */}

      <main className="forgot-main">

        <div className="forgot-card">

          {/* BACK TO LOGIN */}

          <Link
            to="/login"
            className="back-login"
          >
            ← Back to Login
          </Link>


          {/* ICON */}

          <div className="forgot-icon-area">

            <div className="forgot-icon-circle">

              <div className="forgot-envelope">
                ✉
              </div>

            </div>

            <span className="forgot-star star-one">
              ✦
            </span>

            <span className="forgot-star star-two">
              ◆
            </span>

          </div>


          {/* HEADING */}

          <div className="forgot-heading">

            <h1>
              Forgot Password?
            </h1>

            <p>
              Don't worry! It happens. Enter your email
              address and we'll send you a reset link.
            </p>

          </div>


          {/* FORM */}

          <form
            className="forgot-form"
            onSubmit={handleSubmit}
          >

            <label htmlFor="forgot-email">
              Email Address
            </label>

            <div className="forgot-input-wrapper">

              <span>
                ✉
              </span>

              <input
                id="forgot-email"
                type="email"
                placeholder="you@example.com"
                required
              />

            </div>


            <button
              type="submit"
              className="forgot-submit"
            >
              Send Reset Link
            </button>

          </form>


          {/* LOGIN */}

          <Link
            to="/login"
            className="forgot-back-link"
          >
            Back to Login
          </Link>


          {/* SECURITY */}

          <div className="forgot-security">

            <span>🔒</span>

            <p>
              Your information is secure and encrypted.
            </p>

          </div>

        </div>

      </main>


      {/* FOOTER */}

      <footer className="forgot-footer">

        <p>
          Learn <span>•</span> Grow <span>•</span> Achieve
        </p>

      </footer>

    </div>
  );
}

export default ForgotPassword;
