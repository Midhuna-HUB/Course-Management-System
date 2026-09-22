import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Dashboard() {
  const [student, setStudent] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Get currently logged-in student
    const savedStudent = JSON.parse(
      localStorage.getItem("coursehub_current_student")
    );

    if (savedStudent) {
      setStudent(savedStudent);

      // Get courses belonging to this student
      const studentCourses = savedStudent.enrolledCourses || [];

      setEnrolledCourses(studentCourses);
    } else {
      // No logged-in student
      setStudent(null);
      setEnrolledCourses([]);
    }
  }, []);

  const studentName = student?.name || "Student";
  const studentAvatar = student?.avatar || null;

  const totalCourses = enrolledCourses.length;

  const completedCourses = enrolledCourses.filter(
    (course) => course.completed === true
  ).length;

  const certificates = enrolledCourses.filter(
    (course) => course.quizPassed === true
  ).length;

  const overallProgress =
    totalCourses > 0
      ? Math.round(
          enrolledCourses.reduce(
            (total, course) =>
              total + (Number(course.progress) || 0),
            0
          ) / totalCourses
        )
      : 0;

  return (
    <div className="dashboard-page">

      <Navbar />

      <main className="dashboard-container">

        {/* =========================
            HEADER
        ========================= */}

        <section className="dashboard-header">

          <div className="dashboard-header-left">

            {/* STUDENT AVATAR */}

            <div className="dashboard-profile-avatar">

              {studentAvatar ? (
                <img
                  src={studentAvatar}
                  alt={studentName}
                />
              ) : (
                <div className="dashboard-default-avatar">
                  {studentName.charAt(0).toUpperCase()}
                </div>
              )}

            </div>


            <div>

              <span className="dashboard-label">
                STUDENT DASHBOARD
              </span>

              <h1>
                Welcome, {studentName} 👋
              </h1>

              <p>
                Track your learning progress,
                courses and achievements.
              </p>

            </div>

          </div>


          <Link
            to="/browse-courses"
            className="dashboard-browse-btn"
          >
            Browse Courses
          </Link>

        </section>


        {/* =========================
            STATISTICS
        ========================= */}

        <section className="dashboard-stats">

          {/* MY COURSES */}

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              📚
            </div>

            <div>

              <span>
                My Courses
              </span>

              <strong>
                {totalCourses}
              </strong>

            </div>

          </div>


          {/* PROGRESS */}

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              📈
            </div>

            <div>

              <span>
                Overall Progress
              </span>

              <strong>
                {overallProgress}%
              </strong>

            </div>

          </div>


          {/* COMPLETED */}

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              ✅
            </div>

            <div>

              <span>
                Completed
              </span>

              <strong>
                {completedCourses}
              </strong>

            </div>

          </div>


          {/* CERTIFICATES */}

          <div className="dashboard-stat-card">

            <div className="dashboard-stat-icon">
              🏆
            </div>

            <div>

              <span>
                Certificates
              </span>

              <strong>
                {certificates}
              </strong>

            </div>

          </div>

        </section>


        {/* =========================
            MY LEARNING
        ========================= */}

        <section className="dashboard-section">

          <div className="dashboard-section-header">

            <div>

              <span className="dashboard-label">
                MY LEARNING
              </span>

              <h2>
                Continue Learning
              </h2>

            </div>


            {totalCourses > 0 && (
              <Link to="/my-courses">
                View All →
              </Link>
            )}

          </div>


          {/* =========================
              EMPTY STATE
          ========================= */}

          {totalCourses === 0 ? (

            <div className="dashboard-empty">

              <div className="dashboard-empty-icon">
                📚
              </div>

              <h2>
                No Courses Yet
              </h2>

              <p>
                You haven't enrolled in any courses yet.
                Browse the available courses and start
                your learning journey.
              </p>

              <Link
                to="/browse-courses"
                className="dashboard-main-btn"
              >
                Explore Courses
              </Link>

            </div>

          ) : (

            /* =========================
               ENROLLED COURSES
            ========================= */

            <div className="dashboard-course-list">

              {enrolledCourses.map((course) => (

                <div
                  className="dashboard-course-card"
                  key={course.id}
                >

                  {/* COURSE IMAGE */}

                  <div className="dashboard-course-image">

                    <img
                      src={course.image}
                      alt={course.title}
                    />

                  </div>


                  {/* COURSE CONTENT */}

                  <div className="dashboard-course-content">

                    <span className="course-category">
                      {course.category}
                    </span>

                    <h3>
                      {course.title}
                    </h3>

                    <p>
                      {course.description}
                    </p>


                    {/* PROGRESS */}

                    <div className="dashboard-progress-row">

                      <span>
                        Progress
                      </span>

                      <strong>
                        {Number(course.progress) || 0}%
                      </strong>

                    </div>


                    <div className="dashboard-progress">

                      <div
                        className="dashboard-progress-bar"
                        style={{
                          width: `${
                            Number(course.progress) || 0
                          }%`,
                        }}
                      ></div>

                    </div>


                    {/* ACTIONS */}

                    <div className="dashboard-course-actions">

                      <Link
                        to={`/learning/${course.id}`}
                        className="dashboard-main-btn"
                      >
                        {Number(course.progress) > 0
                          ? "Continue Learning"
                          : "Start Learning"}
                      </Link>


                      {course.quizPassed === true && (

                        <Link
                          to={`/certificate/${course.id}`}
                          className="dashboard-certificate-btn"
                        >
                          🏆 Certificate
                        </Link>

                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>


        {/* =========================
            QUICK ACTIONS
        ========================= */}

        <section className="dashboard-section">

          <div className="dashboard-section-header">

            <div>

              <span className="dashboard-label">
                QUICK ACTIONS
              </span>

              <h2>
                What would you like to do?
              </h2>

            </div>

          </div>


          <div className="dashboard-actions-grid">

            {/* BROWSE COURSES */}

            <Link
              to="/browse-courses"
              className="dashboard-action-card"
            >

              <span>
                🔍
              </span>

              <div>

                <h3>
                  Browse Courses
                </h3>

                <p>
                  Explore available courses
                  and find what you want to learn.
                </p>

              </div>

            </Link>


            {/* MY COURSES */}

            <Link
              to="/my-courses"
              className="dashboard-action-card"
            >

              <span>
                📚
              </span>

              <div>

                <h3>
                  My Courses
                </h3>

                <p>
                  View your enrolled courses
                  and learning progress.
                </p>

              </div>

            </Link>


            {/* SEARCH */}

            <Link
              to="/search"
              className="dashboard-action-card"
            >

              <span>
                🔎
              </span>

              <div>

                <h3>
                  Search Courses
                </h3>

                <p>
                  Quickly find a course by
                  topic, skill or category.
                </p>

              </div>

            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;