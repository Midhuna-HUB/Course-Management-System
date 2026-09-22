import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const handleCredentials = (e) => {
    e.preventDefault();

    if (email && password) {
      setStep(2);
    }
  };

  const handleVerification = (e) => {
    e.preventDefault();

    if (code.length >= 4) {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="admin-login-page">

      {/* Left Panel */}
      <section className="admin-login-brand">

        <Link to="/" className="admin-brand-logo">
          <div className="admin-logo-icon">◆</div>

          <div>
            <h2>CourseHub</h2>
            <span>Admin Panel</span>
          </div>
        </Link>

        <div className="admin-brand-content">

          <p className="admin-brand-label">
            COURSE MANAGEMENT
          </p>

          <h1>
            Manage learning.
            <br />
            <span>Build better courses.</span>
          </h1>

          <p>
            Manage courses, organize learning content and keep
            your CourseHub experience running smoothly.
          </p>

          <div className="admin-feature-list">

            <div>
              <span>01</span>
              <p>Manage courses</p>
            </div>

            <div>
              <span>02</span>
              <p>Organize content</p>
            </div>

            <div>
              <span>03</span>
              <p>Monitor your platform</p>
            </div>

          </div>

        </div>

        <div className="admin-brand-footer">
          Secure administrator access
        </div>

      </section>

      {/* Right Panel */}
      <section className="admin-login-form-area">

        <div className="admin-login-card">

          <div className="admin-mobile-logo">
            <div>◆</div>
            <strong>CourseHub</strong>
          </div>

          {step === 1 ? (

            <>
              <div className="admin-form-heading">

                <div className="admin-step-badge">
                  STEP 01
                </div>

                <h1>Admin Login</h1>

                <p>
                  Sign in to access the CourseHub administration panel.
                </p>

              </div>

              <form
                className="admin-login-form"
                onSubmit={handleCredentials}
              >

                <div className="admin-input-group">
                  <label>Admin Email</label>

                  <input
                    type="email"
                    placeholder="admin@coursehub.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="admin-input-group">
                  <div className="admin-label-row">
                    <label>Password</label>
                    <span>Admin account only</span>
                  </div>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="admin-primary-button"
                >
                  Continue to Verification →
                </button>

              </form>

              <div className="admin-security-note">
                <span>✓</span>
                <p>
                  Your administrator session is protected with
                  two-step verification.
                </p>
              </div>

              <Link to="/login" className="admin-student-login">
                ← Return to Student Login
              </Link>
            </>

          ) : (

            <>
              <div className="admin-form-heading">

                <div className="admin-step-badge">
                  STEP 02
                </div>

                <div className="verification-icon">
                  ✓
                </div>

                <h1>Verify Access</h1>

                <p>
                  Enter the verification code sent to your
                  administrator account.
                </p>

              </div>

              <form
                className="admin-login-form"
                onSubmit={handleVerification}
              >

                <div className="admin-input-group">

                  <label>Verification Code</label>

                  <input
                    className="verification-input"
                    type="text"
                    inputMode="numeric"
                    maxLength="6"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={(e) =>
                      setCode(e.target.value.replace(/\D/g, ""))
                    }
                    required
                  />

                  <small>
                    Enter the code provided for this login.
                  </small>

                </div>

                <button
                  type="submit"
                  className="admin-primary-button"
                >
                  Verify & Open Dashboard →
                </button>

              </form>

              <div className="verification-actions">

                <button
                  type="button"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>

                <button
                  type="button"
                  onClick={() => setCode("")}
                >
                  Clear Code
                </button>

              </div>

              <div className="admin-security-note">
                <span>✓</span>
                <p>
                  Two-step verification helps protect
                  administrator access.
                </p>
              </div>

            </>
          )}

        </div>

        <p className="admin-bottom-text">
          CourseHub Administration • Authorized access only
        </p>

      </section>

    </div>
  );
}

export default AdminLogin;
