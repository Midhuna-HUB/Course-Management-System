import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function EnrollmentSuccess() {
  return (
    <div className="enrollment-success-page">
      <Navbar />

      <div className="success-container">
        <div className="success-icon">✓</div>

        <h1>Enrollment Successful!</h1>

        <p>
          You have successfully enrolled in the course.
        </p>

        <p className="success-subtext">
          Your learning journey starts now. Explore the course
          materials and complete each learning activity.
        </p>

        <div className="success-buttons">
          <Link to="/my-courses" className="success-primary-btn">
            Go to My Courses
          </Link>

          <Link to="/courses" className="success-secondary-btn">
            Browse More Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentSuccess;