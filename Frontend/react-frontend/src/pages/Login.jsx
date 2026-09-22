import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import girlAvatar from "../assets/girl-avatar.png";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Get registered students
    const students =
      JSON.parse(localStorage.getItem("coursehub_students")) || [];

    // Find student using email and password
    const student = students.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase() &&
        user.password === password
    );

    // Student not found
    if (!student) {
      alert("Invalid email or password.");
      return;
    }

    // Save currently logged-in student
    localStorage.setItem(
      "coursehub_current_student",
      JSON.stringify(student)
    );

    // Go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* =========================
          LEFT SIDE
      ========================= */}

      <section className="login-left">

        {/* BRAND */}

        <Link to="/" className="login-brand">

          <div className="login-logo-icon">
            ◆
          </div>

          <div>
            <h2>CourseHub</h2>
            <p>Learn • Grow • Build Your Future</p>
          </div>

        </Link>


        {/* ILLUSTRATION */}

        <div className="login-illustration">

          <div className="illustration-circle"></div>

          <div className="floating-shape shape-one">
            ✦
          </div>

          <div className="floating-shape shape-two">
            ◆
          </div>

          <img
            src={girlAvatar}
            alt="CourseHub student"
            className="login-avatar"
          />

        </div>


        {/* MESSAGE */}

        <div className="login-message">

          <h1>

            Small steps
            <br />

            today, big dreams
            <br />

            <span>tomorrow.</span>

          </h1>


          <p>

            Learn at your own pace and build skills
            that help you create your future.

          </p>


          <div className="login-dots">

            <span className="active"></span>

            <span></span>

            <span></span>

          </div>

        </div>

      </section>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <section className="login-right">

        <div className="login-card">

          {/* MOBILE BRAND */}

          <div className="mobile-brand">

            <div className="login-logo-icon">
              ◆
            </div>

            <h2>CourseHub</h2>

          </div>


          {/* HEADING */}

          <div className="login-heading">

            <p className="welcome-small">
              WELCOME BACK!
            </p>

            <h1>
              Login to continue
            </h1>

            <p>
              Continue your learning journey with CourseHub.
            </p>

          </div>


          {/* LOGIN FORM */}

          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <div className="input-group">

              <label htmlFor="email">
                Email or Phone Number
              </label>

              <div className="input-wrapper">

                <span className="input-icon">
                  ✉
                </span>

                <input
                  id="email"
                  type="text"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="input-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>

              </div>


              <div className="input-wrapper">

                <span className="input-icon">
                  🔒
                </span>

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-eye"
                  aria-label="Show password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  ◉
                </button>

              </div>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="login-submit"
            >
              Login
            </button>

          </form>


          {/* DIVIDER */}

          <div className="login-divider">

            <span></span>

            <p>
              or continue with
            </p>

            <span></span>

          </div>


          {/* SOCIAL LOGIN */}

          <div className="social-login">

            <button
              type="button"
              className="social-button"
            >

              <span className="google-icon">
                G
              </span>

              Google

            </button>


            <button
              type="button"
              className="social-button"
            >

              <span className="microsoft-icon">
                ▦
              </span>

              Microsoft

            </button>

          </div>


          {/* REGISTER */}

          <p className="register-text">

            New to CourseHub?

            <Link to="/register">
              Create an account
            </Link>

          </p>


          {/* SECURITY */}

          <div className="login-security">

            <span>
              🔒
            </span>

            <p>
              Your information is secure and encrypted.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;