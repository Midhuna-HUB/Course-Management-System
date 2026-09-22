import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

function Certificate() {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  const enrolledCourses =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const enrolledCourse = enrolledCourses.find(
    (item) => item.id === Number(id)
  );

  const studentName =
    localStorage.getItem("studentName") || "Student";

  const passed = enrolledCourse?.quizPassed === true;

  const certificateId = `CH-${String(course?.id || 0).padStart(
    3,
    "0"
  )}-${String(enrolledCourse?.quizScore || 0).padStart(2, "0")}`;

  const certificateDate = new Date().toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  if (!course || !passed) {
    return (
      <div className="certificate-page">
        <Navbar />

        <div className="certificate-locked">
          <div className="certificate-lock-icon">
            🔒
          </div>

          <h1>Certificate Not Available</h1>

          <p>
            Complete the required learning materials and
            pass the final quiz to receive your certificate.
          </p>

          <Link to={`/learning/${id}`}>
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="certificate-page">
      <Navbar />

      <main className="certificate-main">

        {/* Certificate */}

        <div className="certificate">

          <div className="certificate-outer-border">

            <div className="certificate-inner-border">

              {/* Decorative Corners */}

              <div className="corner corner-top-left">
                ✦
              </div>

              <div className="corner corner-top-right">
                ✦
              </div>

              <div className="corner corner-bottom-left">
                ✦
              </div>

              <div className="corner corner-bottom-right">
                ✦
              </div>

              <div className="certificate-content">

                {/* Header */}

                <div className="certificate-header">

                  <div className="certificate-brand">
                    COURSE<span>HUB</span>
                  </div>

                  <div className="certificate-mini-line"></div>

                  <p className="certificate-subtitle">
                    ONLINE LEARNING PLATFORM
                  </p>

                </div>

                {/* Main Title */}

                <div className="certificate-title-section">

                  <p className="certificate-small-title">
                    CERTIFICATE
                  </p>

                  <h1>OF COMPLETION</h1>

                  <div className="title-decoration">
                    <span></span>
                    <strong>✦</strong>
                    <span></span>
                  </div>

                </div>

                {/* Student */}

                <div className="certificate-student">

                  <p>
                    This certificate is proudly presented to
                  </p>

                  <h2>{studentName}</h2>

                  <div className="student-line"></div>

                </div>

                {/* Description */}

                <div className="certificate-message">

                  <p>
                    This is to certify that
                    <strong> {studentName} </strong>
                    has successfully completed the
                    <strong> {course.title} </strong>
                    course through CourseHub and has
                    successfully passed the final assessment.
                  </p>

                </div>

                {/* Course */}

                <div className="course-award">

                  <span>COURSE COMPLETED</span>

                  <h3>{course.title}</h3>

                  <p>
                    {course.category} • {course.level} •{" "}
                    {course.duration}
                  </p>

                </div>

                {/* Achievement Details */}

                <div className="certificate-details">

                  <div className="certificate-detail-item">

                    <span>FINAL SCORE</span>

                    <strong>
                      {enrolledCourse.quizScore}%
                    </strong>

                  </div>

                  <div className="certificate-detail-divider"></div>

                  <div className="certificate-detail-item">

                    <span>DATE OF COMPLETION</span>

                    <strong>{certificateDate}</strong>

                  </div>

                  <div className="certificate-detail-divider"></div>

                  <div className="certificate-detail-item">

                    <span>CERTIFICATE ID</span>

                    <strong>{certificateId}</strong>

                  </div>

                </div>

                {/* Bottom Section */}

                <div className="certificate-bottom">

                  <div className="certificate-signature">

                    <div className="signature-line"></div>

                    <strong>CourseHub</strong>

                    <span>Learning Platform</span>

                  </div>

                  {/* Seal */}

                  <div className="certificate-seal">

                    <div className="seal-inner">

                      <span>✓</span>

                      <strong>VERIFIED</strong>

                      <small>CERTIFICATE</small>

                    </div>

                  </div>

                  <div className="certificate-signature">

                    <div className="signature-line"></div>

                    <strong>Course Completion</strong>

                    <span>Certificate Authority</span>

                  </div>

                </div>

                {/* Verification */}

                <div className="certificate-verification">

                  <span>✓</span>

                  <p>
                    This certificate recognizes the successful
                    completion of the course requirements on
                    CourseHub.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="certificate-actions">

          <button
            className="download-certificate-btn"
            onClick={handlePrint}
          >
            🖨 Download Certificate
          </button>

          <Link
            to="/my-courses"
            className="back-courses-btn"
          >
            ← Back to My Courses
          </Link>

        </div>

      </main>
    </div>
  );
}

export default Certificate;