import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

function Notes() {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div>
        <Navbar />

        <div className="learning-not-found">
          <h1>Course Not Found</h1>

          <Link to="/courses">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-page">

      <Navbar />

      <main className="notes-container">

        <Link
          to={`/learning/${course.id}`}
          className="back-learning-btn"
        >
          ← Back to Learning
        </Link>

        <section className="notes-header">

          <span className="course-category">
            {course.category}
          </span>

          <h1>
            {course.title} - Learning Notes
          </h1>

          <p>
            Detailed study notes to help you understand
            the important concepts of this course.
          </p>

        </section>

        <section className="notes-content">

          <article className="note-section">

            <h2>
              1. Introduction
            </h2>

            <p>
              {course.title} is an important area of
              technology that helps learners develop
              practical and industry-relevant skills.
              This section introduces the basic ideas
              and concepts that you need to understand
              before moving to advanced topics.
            </p>

          </article>

          <article className="note-section">

            <h2>
              2. Core Concepts
            </h2>

            <p>
              The core concepts form the foundation of
              this course. Understanding these concepts
              clearly will make it easier to work on
              practical problems and projects.
            </p>

            <div className="topic-list">

              {course.skills.map(
                (skill, index) => (

                  <div
                    className="topic-item"
                    key={index}
                  >

                    <span>
                      ✓
                    </span>

                    <div>
                      <h3>
                        {skill}
                      </h3>

                      <p>
                        Learn the fundamentals,
                        important concepts and
                        practical usage of {skill}.
                      </p>
                    </div>

                  </div>

                )
              )}

            </div>

          </article>

          <article className="note-section">

            <h2>
              3. Practical Learning
            </h2>

            <p>
              After understanding the theory, apply
              the concepts through practical examples,
              exercises and projects. Practical
              implementation helps you understand how
              the technology is used in real-world
              situations.
            </p>

          </article>

          <article className="note-section">

            <h2>
              4. Important Skills
            </h2>

            <div className="skills-list">

              {course.skills.map(
                (skill, index) => (
                  <span key={index}>
                    {skill}
                  </span>
                )
              )}

            </div>

          </article>

          <article className="note-section">

            <h2>
              5. Career Opportunities
            </h2>

            <p>
              After developing the skills covered in
              this course, learners can explore career
              opportunities related to the following
              roles:
            </p>

            <div className="career-note-grid">

              {course.jobRoles.map(
                (role, index) => (

                  <div
                    className="career-note-card"
                    key={index}
                  >

                    <span>
                      💼
                    </span>

                    <h3>
                      {role}
                    </h3>

                  </div>

                )
              )}

            </div>

          </article>

          <article className="note-section">

            <h2>
              6. Revision Checklist
            </h2>

            <ul className="revision-list">

              <li>
                Understand the basic concepts
              </li>

              <li>
                Review the important terminology
              </li>

              <li>
                Practice the technical skills
              </li>

              <li>
                Work on practical examples
              </li>

              <li>
                Complete the course lessons
              </li>

              <li>
                Prepare for the final assessment
              </li>

            </ul>

          </article>

        </section>

        <div className="notes-footer">

          <Link
            to={`/learning/${course.id}`}
            className="notes-learning-btn"
          >
            Continue Learning →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Notes;