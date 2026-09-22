import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    // Actual password update will be connected later.
    navigate("/login");
  };

  return (
    <div className="reset-page">

      {/* BRAND */}

      <header className="reset-header">

        <Link to="/" className="reset-brand">

          <div className="reset-logo">
            ◆
          </div>

          <div>
            <h2>CourseHub</h2>

            <p>
              Learn • Grow • Build Your Future
            </p>
          </div>

        </Link>

      </header>


      {/* MAIN */}

      <main className="reset-main">

        <div className="reset-card">

          {/* ICON */}

          <div className="reset-icon-area">

            <div className="reset-icon-circle">

              <span>
                🔑
              </span>

            </div>

            <div className="reset-decoration reset-decoration-one">
              ✦
            </div>

            <div className="reset-decoration reset-decoration-two">
              ◆
            </div>

          </div>


          {/* HEADING */}

          <div className="reset-heading">

            <p className="reset-small-title">
              CREATE NEW PASSWORD
            </p>

            <h1>
              Reset Your Password
            </h1>

            <p>
              Create a new password for your CourseHub
              account. Make sure it is strong and secure.
            </p>

          </div>


          {/* FORM */}

          <form
            className="reset-form"
            onSubmit={handleReset}
          >

            {/* NEW PASSWORD */}

            <div className="reset-input-group">

              <label htmlFor="new-password">
                New Password
              </label>

              <div className="reset-input-wrapper">

                <span className="reset-input-icon">
                  🔒
                </span>

                <input
                  id="new-password"
                  type="password"
                  placeholder="Enter new password"
                  required
                />

                <button
                  type="button"
                  className="reset-eye"
                >
                  ◉
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="reset-input-group">

              <label htmlFor="confirm-new-password">
                Confirm New Password
              </label>

              <div className="reset-input-wrapper">

                <span className="reset-input-icon">
                  🔒
                </span>

                <input
                  id="confirm-new-password"
                  type="password"
                  placeholder="Confirm new password"
                  required
                />

                <button
                  type="button"
                  className="reset-eye"
                >
                  ◉
                </button>

              </div>

            </div>


            {/* PASSWORD REQUIREMENTS */}

            <div className="password-requirements">

              <p>
                Your password should contain:
              </p>

              <div className="requirement-row">

                <span>✓</span>
                <p>At least 8 characters</p>

              </div>

              <div className="requirement-row">

                <span>✓</span>
                <p>A combination of letters and numbers</p>

              </div>

            </div>


            {/* RESET BUTTON */}

            <button
              type="submit"
              className="reset-submit"
            >
              Reset Password
            </button>

          </form>


          {/* LOGIN */}

          <Link
            to="/login"
            className="reset-login-link"
          >
            ← Back to Login
          </Link>


          {/* SECURITY */}

          <div className="reset-security">

            <span>🔒</span>

            <p>
              Your account security is important to us.
            </p>

          </div>

        </div>

      </main>


      {/* FOOTER */}

      <footer className="reset-footer">

        <p>
          Learn <span>•</span> Grow <span>•</span> Achieve
        </p>

      </footer>

    </div>
  );
}

export default ResetPassword;
