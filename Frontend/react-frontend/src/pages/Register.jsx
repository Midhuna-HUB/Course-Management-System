import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

import boyAvatar from "../assets/boy-avatar.png";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Check password
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Create new student
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      password: password,

      // Default avatar
      avatar: boyAvatar,

      // New student starts with no courses
      enrolledCourses: [],
      completedCourses: [],
      progress: 0,

      registeredAt: new Date().toISOString(),
    };

    // Get existing students
    const existingStudents =
      JSON.parse(localStorage.getItem("coursehub_students")) || [];

    // Check if email already exists
    const emailExists = existingStudents.some(
      (student) =>
        student.email.toLowerCase() ===
        newStudent.email.toLowerCase()
    );

    if (emailExists) {
      alert("An account with this email already exists.");
      return;
    }

    // Add new student
    existingStudents.push(newStudent);

    localStorage.setItem(
      "coursehub_students",
      JSON.stringify(existingStudents)
    );

    // Save currently logged-in student
    localStorage.setItem(
      "coursehub_current_student",
      JSON.stringify(newStudent)
    );

    // Go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="register-page">

      {/* =========================
          LEFT SIDE - FORM
      ========================= */}

      <section className="register-left">

        {/* BRAND */}

        <Link to="/" className="register-brand">

          <div className="register-logo-icon">
            ◆
          </div>

          <div>
            <h2>CourseHub</h2>
            <p>Learn • Grow • Build Your Future</p>
          </div>

        </Link>


        {/* FORM CONTAINER */}

        <div className="register-form-container">

          {/* HEADING */}

          <div className="register-heading">

            <p className="register-small-title">
              GET STARTED
            </p>

            <h1>
              Create Your Account
            </h1>

            <p>
              Start your learning journey today.
            </p>

          </div>


          {/* REGISTER FORM */}

          <form onSubmit={handleRegister}>

            {/* FULL NAME */}

            <div className="register-input-group">

              <label htmlFor="name">
                Full Name
              </label>

              <div className="register-input-wrapper">

                <span>♙</span>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="register-input-group">

              <label htmlFor="register-email">
                Email Address
              </label>

              <div className="register-input-wrapper">

                <span>✉</span>

                <input
                  id="register-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="register-input-group">

              <label htmlFor="register-password">
                Password
              </label>

              <div className="register-input-wrapper">

                <span>🔒</span>

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="register-eye"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  ◉
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            <div className="register-input-group">

              <label htmlFor="confirm-password">
                Confirm Password
              </label>

              <div className="register-input-wrapper">

                <span>🔒</span>

                <input
                  id="confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="register-eye"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  ◉
                </button>

              </div>

            </div>


            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="register-submit"
            >
              Create Account
            </button>

          </form>


          {/* DIVIDER */}

          <div className="register-divider">

            <span></span>

            <p>
              or continue with
            </p>

            <span></span>

          </div>


          {/* SOCIAL LOGIN */}

          <div className="register-social">

            <button type="button">

              <span className="google-register">
                G
              </span>

              Google

            </button>


            <button type="button">

              <span className="microsoft-register">
                ▦
              </span>

              Microsoft

            </button>

          </div>


          {/* LOGIN */}

          <p className="already-account">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>


          {/* TERMS */}

          <p className="terms-text">

            By creating an account, you agree to our

            <span>
              {" "}Terms & Conditions
            </span>

            {" "}and

            <span>
              {" "}Privacy Policy
            </span>.

          </p>

        </div>

      </section>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <section className="register-right">

        <div className="register-art">

          <div className="register-art-circle"></div>


          <div className="register-shape register-shape-one">
            ✦
          </div>


          <div className="register-shape register-shape-two">
            ◆
          </div>


          <img
            src={boyAvatar}
            alt="CourseHub student"
            className="register-avatar"
          />

        </div>


        {/* MESSAGE */}

        <div className="register-message">

          <h1>

            Join CourseHub
            <br />

            and unlock your
            <br />

            <span>
              potential.
            </span>

          </h1>


          <p>

            Learn new skills, explore new ideas,
            and move one step closer to your goals.

          </p>


          <div className="register-progress">

            <span className="active"></span>

            <span></span>

            <span></span>

          </div>

        </div>


        {/* QUOTE */}

        <div className="register-quote">

          Learn
          <span>•</span>
          Grow
          <span>•</span>
          Achieve

        </div>

      </section>

    </div>
  );
}

export default Register;