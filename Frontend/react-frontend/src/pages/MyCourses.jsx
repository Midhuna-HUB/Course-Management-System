import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function MyCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  /* =========================
     LOAD CURRENT STUDENT COURSES
  ========================= */

  useEffect(() => {
    const loadCourses = () => {
      const currentStudent = JSON.parse(
        localStorage.getItem(
          "coursehub_current_student"
        )
      );

      if (currentStudent) {
        setEnrolledCourses(
          currentStudent.enrolledCourses || []
        );
      } else {
        setEnrolledCourses([]);
      }
    };

    loadCourses();

    window.addEventListener(
      "storage",
      loadCourses
    );

    return () => {
      window.removeEventListener(
        "storage",
        loadCourses
      );
    };
  }, []);

  return (
    <div className="my-courses-page">

      <Navbar />


      {/* =========================
          HEADER
      ========================= */}

      <section className="my-courses-header">

        <p className="my-courses-label">
          YOUR LEARNING
        </p>

        <h1>
          My Courses
        </h1>

        <p>
          Continue learning from the courses you
          have enrolled in.
        </p>

      </section>


      {/* =========================
          COURSES
      ========================= */}

      <section className="my-courses-container">

        {enrolledCourses.length === 0 ? (

          /* =========================
             EMPTY STATE
          ========================= */

          <div className="empty-courses">

            <div className="empty-icon">
              📚
            </div>

            <h2>
              No Courses Yet
            </h2>

            <p>
              You haven't enrolled in any courses yet.
              Explore our available courses and start
              your learning journey.
            </p>

            <Link
              to="/courses"
              className="browse-courses-btn"
            >
              Browse Courses
            </Link>

          </div>

        ) : (

          /* =========================
             COURSE GRID
          ========================= */

          <div className="my-courses-grid">

            {enrolledCourses.map((course) => {

              const progress =
                Number(course.progress) || 0;

              const quizPassed =
                course.quizPassed === true;

              const completed =
                course.completed === true;

              return (

                <div
                  className="my-course-card"
                  key={course.id}
                >

                  {/* COURSE IMAGE */}

                  <img
                    src={course.image}
                    alt={course.title}
                    className="my-course-image"
                  />


                  {/* COURSE CONTENT */}

                  <div className="my-course-content">

                    <span className="course-category">
                      {course.category}
                    </span>


                    <h2>
                      {course.title}
                    </h2>


                    <p>
                      {course.description}
                    </p>


                    {/* =========================
                        PROGRESS
                    ========================= */}

                    <div className="progress-section">

                      <div className="progress-header">

                        <span>
                          Course Progress
                        </span>

                        <strong>
                          {progress}%
                        </strong>

                      </div>


                      <div className="progress-bar">

                        <div
                          className="progress-fill"
                          style={{
                            width: `${progress}%`,
                          }}
                        ></div>

                      </div>

                    </div>


                    {/* =========================
                        STATUS
                    ========================= */}

                    <div className="course-status">

                      {completed &&
                      quizPassed ? (

                        <span className="status-completed">
                          ✓ Course Completed
                        </span>

                      ) : progress > 0 ? (

                        <span className="status-progress">
                          ◐ In Progress
                        </span>

                      ) : (

                        <span className="status-not-started">
                          ○ Not Started
                        </span>

                      )}

                    </div>


                    {/* =========================
                        ACTIONS
                    ========================= */}

                    <div className="my-course-actions">

                      <Link
                        to={`/learning/${course.id}`}
                        className="continue-learning-btn"
                      >
                        {progress > 0
                          ? "Continue Learning"
                          : "Start Learning"}
                      </Link>


                      {quizPassed && (

                        <Link
                          to={`/certificate/${course.id}`}
                          className="view-certificate-btn"
                        >
                          🏆 Certificate
                        </Link>

                      )}

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

        )}

      </section>

    </div>
  );
}

export default MyCourses;