import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

function Learning() {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  const [completedLessons, setCompletedLessons] =
    useState([]);

  const lessons = [
    {
      id: 1,
      title: `Introduction to ${
        course?.title || "the Course"
      }`,
      description:
        "Understand the basics, purpose and important concepts of this course.",
    },
    {
      id: 2,
      title: "Core Concepts",
      description:
        "Learn the fundamental concepts, terminology and principles.",
    },
    {
      id: 3,
      title: "Practical Applications",
      description:
        "Understand how the concepts are applied in real-world situations.",
    },
  ];

  /* =========================
     LOAD STUDENT COURSE DATA
  ========================= */

  useEffect(() => {
    if (!course) return;

    const currentStudent = JSON.parse(
      localStorage.getItem(
        "coursehub_current_student"
      )
    );

    if (!currentStudent) {
      setCompletedLessons([]);
      return;
    }

    const enrolledCourses =
      currentStudent.enrolledCourses || [];

    const enrolledCourse =
      enrolledCourses.find(
        (item) => item.id === course.id
      );

    if (enrolledCourse?.completedLessons) {
      setCompletedLessons(
        enrolledCourse.completedLessons
      );
    } else {
      setCompletedLessons([]);
    }
  }, [course]);

  /* =========================
     COURSE NOT FOUND
  ========================= */

  if (!course) {
    return (
      <div>
        <Navbar />

        <div className="learning-not-found">

          <h1>
            Course Not Found
          </h1>

          <Link to="/courses">
            Back to Courses
          </Link>

        </div>
      </div>
    );
  }

  /* =========================
     COMPLETE LESSON
  ========================= */

  const completeLesson = (lessonId) => {

    if (
      completedLessons.includes(
        lessonId
      )
    ) {
      return;
    }

    const currentStudent = JSON.parse(
      localStorage.getItem(
        "coursehub_current_student"
      )
    );

    if (!currentStudent) {
      alert(
        "Please login before continuing the course."
      );

      return;
    }

    const updatedLessons = [
      ...completedLessons,
      lessonId,
    ];

    setCompletedLessons(
      updatedLessons
    );

    /* =========================
       GET ALL STUDENTS
    ========================= */

    const students =
      JSON.parse(
        localStorage.getItem(
          "coursehub_students"
        )
      ) || [];

    /* =========================
       FIND CURRENT STUDENT
    ========================= */

    const studentIndex =
      students.findIndex(
        (student) =>
          student.id ===
          currentStudent.id
      );

    if (studentIndex === -1) {
      alert(
        "Student account not found. Please login again."
      );

      return;
    }

    /* =========================
       UPDATE COURSE
    ========================= */

    const studentCourses =
      students[studentIndex]
        .enrolledCourses || [];

    const progress =
      Math.round(
        (updatedLessons.length /
          lessons.length) *
          100
      );

    const updatedCourses =
      studentCourses.map(
        (item) => {

          if (
            item.id === course.id
          ) {

            return {
              ...item,

              completedLessons:
                updatedLessons,

              progress:
                progress,

              completed:
                progress === 100,
            };

          }

          return item;
        }
      );

    /* =========================
       UPDATE STUDENT
    ========================= */

    const updatedStudent = {
      ...students[studentIndex],

      enrolledCourses:
        updatedCourses,
    };

    students[studentIndex] =
      updatedStudent;

    /* =========================
       SAVE DATA
    ========================= */

    localStorage.setItem(
      "coursehub_students",
      JSON.stringify(students)
    );

    localStorage.setItem(
      "coursehub_current_student",
      JSON.stringify(
        updatedStudent
      )
    );
  };

  /* =========================
     PROGRESS
  ========================= */

  const progress =
    Math.round(
      (completedLessons.length /
        lessons.length) *
        100
    );

  const allLessonsCompleted =
    completedLessons.length ===
    lessons.length;

  return (
    <div className="learning-page">

      <Navbar />


      {/* =========================
          HEADER
      ========================= */}

      <section className="learning-header">

        <div>

          <span className="course-category">
            {course.category}
          </span>

          <h1>
            {course.title}
          </h1>

          <p>
            {course.description}
          </p>

        </div>


        {/* PROGRESS CARD */}

        <div className="learning-progress-card">

          <span>
            Your Progress
          </span>

          <strong>
            {progress}%
          </strong>

          <div className="learning-progress-bar">

            <div
              className="learning-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

          <small>
            {completedLessons.length} of{" "}
            {lessons.length} lessons completed
          </small>

        </div>

      </section>


      <main className="learning-container">


        {/* =========================
            OVERVIEW
        ========================= */}

        <section className="learning-section">

          <h2>
            📖 Course Overview
          </h2>

          <p>
            Welcome to {course.title}.
            Follow the lessons in order
            and complete the required
            learning materials. Your
            progress is updated when you
            complete a lesson.
          </p>

        </section>


        {/* =========================
            LESSONS
        ========================= */}

        <section className="learning-section">

          <h2>
            🎥 Course Lessons
          </h2>


          <div className="lesson-list">

            {lessons.map(
              (lesson) => {

                const isCompleted =
                  completedLessons.includes(
                    lesson.id
                  );

                return (

                  <div
                    className={`lesson-card ${
                      isCompleted
                        ? "lesson-completed"
                        : ""
                    }`}
                    key={lesson.id}
                  >

                    <div className="lesson-number">

                      {isCompleted
                        ? "✓"
                        : `0${lesson.id}`}

                    </div>


                    <div className="lesson-content">

                      <h3>
                        {lesson.title}
                      </h3>

                      <p>
                        {lesson.description}
                      </p>

                    </div>


                    <button
                      className={
                        isCompleted
                          ? "lesson-complete-btn completed"
                          : "lesson-complete-btn"
                      }
                      onClick={() =>
                        completeLesson(
                          lesson.id
                        )
                      }
                      disabled={
                        isCompleted
                      }
                    >

                      {isCompleted
                        ? "Completed"
                        : "Mark as Complete"}

                    </button>

                  </div>

                );
              }
            )}

          </div>

        </section>


        {/* =========================
            NOTES
        ========================= */}

        <section className="learning-section">

          <h2>
            📝 Learning Notes
          </h2>


          <div className="resource-grid">


            <div className="resource-card">

              <div className="resource-icon">
                📖
              </div>

              <h3>
                Detailed Notes
              </h3>

              <p>
                Read detailed explanations
                of the important topics
                covered in this course.
              </p>

              <Link
                to={`/notes/${course.id}`}
                className="resource-btn"
              >
                Read Notes
              </Link>

            </div>


            <div className="resource-card">

              <div className="resource-icon">
                🖼️
              </div>

              <h3>
                Diagrams & Examples
              </h3>

              <p>
                Learn concepts using
                diagrams, examples and
                visual explanations.
              </p>

              <Link
                to={`/visual-learning/${course.id}`}
                className="resource-btn"
              >
                View Resources
              </Link>

            </div>


          </div>

        </section>


        {/* =========================
            COURSE RESOURCES
        ========================= */}

        <section className="learning-section">

          <h2>
            📚 Course Resources
          </h2>


          <div className="resource-grid">


            {/* PPT */}

            <div className="resource-card">

              <div className="resource-icon">
                📑
              </div>

              <h3>
                PPT Resources
              </h3>

              <p>
                Presentation materials for
                revision and additional
                learning.
              </p>

              <Link
                to={`/resources/${course.id}`}
                className="resource-btn"
              >
                View PPT
              </Link>

            </div>


            {/* DATASET */}

            <div className="resource-card">

              <div className="resource-icon">
                📊
              </div>

              <h3>
                Datasets
              </h3>

              <p>
                Practice with course-related
                datasets and real-world
                examples.
              </p>

              <Link
                to={`/resources/${course.id}`}
                className="resource-btn"
              >
                View Dataset
              </Link>

            </div>


            {/* PRACTICE */}

            <div className="resource-card">

              <div className="resource-icon">
                🧪
              </div>

              <h3>
                Practice
              </h3>

              <p>
                Practice questions and
                activities to strengthen
                your understanding.
              </p>

              <Link
                to={`/resources/${course.id}`}
                className="resource-btn"
              >
                Start Practice
              </Link>

            </div>


          </div>

        </section>


        {/* =========================
            CAREER
        ========================= */}

        <section className="learning-section">

          <h2>
            💼 Career Opportunities
          </h2>


          <div className="job-roles-list">

            {course.jobRoles.map(
              (role, index) => (

                <div
                  className="job-role-card"
                  key={index}
                >

                  <h3>
                    {role}
                  </h3>

                  <p>
                    This course can help you
                    build skills related to
                    this career path.
                  </p>

                </div>

              )
            )}

          </div>

        </section>


        {/* =========================
            FINAL QUIZ
        ========================= */}

        <section className="final-quiz-card">

          <div>

            <h2>
              🏆 Final Quiz
            </h2>


            {allLessonsCompleted ? (

              <p>
                🎉 You completed all the
                required lessons. You can
                now attend the final quiz.
              </p>

            ) : (

              <p>
                Complete all required lessons
                to unlock the final quiz.
              </p>

            )}

          </div>


          {allLessonsCompleted ? (

            <Link
              to={`/quiz/${course.id}`}
              className="start-quiz-btn"
            >
              Start Final Quiz
            </Link>

          ) : (

            <button
              className="quiz-locked-btn"
              disabled
            >
              🔒 Quiz Locked
            </button>

          )}

        </section>


      </main>

    </div>
  );
}

export default Learning;