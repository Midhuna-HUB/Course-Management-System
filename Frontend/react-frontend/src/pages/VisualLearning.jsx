import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

function VisualLearning() {
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
    <div className="visual-learning-page">

      <Navbar />

      <main className="visual-learning-container">

        <Link
          to={`/learning/${course.id}`}
          className="back-learning-btn"
        >
          ← Back to Learning
        </Link>

        {/* Header */}

        <section className="visual-header">

          <span className="course-category">
            {course.category}
          </span>

          <h1>
            {course.title}
          </h1>

          <p>
            Understand important concepts through
            simple visual explanations and examples.
          </p>

        </section>

        {/* Concept Flow */}

        <section className="visual-section">

          <h2>
            🔄 Learning Flow
          </h2>

          <p className="visual-description">
            A simple learning flow to understand how
            the major concepts connect with each other.
          </p>

          <div className="concept-flow">

            {course.skills.slice(0, 5).map(
              (skill, index) => (

                <React.Fragment key={skill}>

                  <div className="concept-box">

                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <h3>
                      {skill}
                    </h3>

                  </div>

                  {index <
                    Math.min(
                      course.skills.length,
                      5
                    ) -
                      1 && (
                    <div className="flow-arrow">
                      →
                    </div>
                  )}

                </React.Fragment>

              )
            )}

          </div>

        </section>

        {/* Visual Concepts */}

        <section className="visual-section">

          <h2>
            🧠 Important Concepts
          </h2>

          <div className="visual-card-grid">

            {course.skills.slice(0, 6).map(
              (skill, index) => (

                <div
                  className="visual-concept-card"
                  key={skill}
                >

                  <div className="visual-number">
                    {index + 1}
                  </div>

                  <div>

                    <h3>
                      {skill}
                    </h3>

                    <p>
                      Understand the basic idea,
                      purpose and practical usage
                      of {skill}.
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </section>

        {/* Example */}

        <section className="visual-section">

          <h2>
            💡 Practical Example
          </h2>

          <div className="example-card">

            <div className="example-header">
              <span>
                Example
              </span>

              <strong>
                Real-world Application
              </strong>
            </div>

            <p>
              Imagine you are working on a real-world
              project related to {course.title}.
              You would first understand the
              requirements, select the appropriate
              concepts, apply the required skills and
              finally evaluate the result.
            </p>

            <div className="example-flow">

              <div>
                <span>01</span>
                <strong>Understand</strong>
                <small>
                  Identify the problem
                </small>
              </div>

              <div className="example-arrow">
                →
              </div>

              <div>
                <span>02</span>
                <strong>Apply</strong>
                <small>
                  Use the learned concepts
                </small>
              </div>

              <div className="example-arrow">
                →
              </div>

              <div>
                <span>03</span>
                <strong>Evaluate</strong>
                <small>
                  Check the result
                </small>
              </div>

            </div>

          </div>

        </section>

        {/* Skills Map */}

        <section className="visual-section">

          <h2>
            🗺️ Skills Map
          </h2>

          <div className="skills-map">

            <div className="skills-map-center">
              <span>
                COURSE
              </span>

              <strong>
                {course.title}
              </strong>
            </div>

            {course.skills.map(
              (skill, index) => (

                <div
                  className={`skill-map-item skill-map-${index + 1}`}
                  key={skill}
                >
                  {skill}
                </div>

              )
            )}

          </div>

        </section>

        {/* Career Connection */}

        <section className="visual-section">

          <h2>
            💼 Career Connection
          </h2>

          <div className="career-visual-grid">

            {course.jobRoles.map(
              (role, index) => (

                <div
                  className="career-visual-card"
                  key={role}
                >

                  <div>
                    💼
                  </div>

                  <h3>
                    {role}
                  </h3>

                  <p>
                    Apply the skills learned in
                    this course to build relevant
                    projects and practical experience.
                  </p>

                </div>

              )
            )}

          </div>

        </section>

        {/* Continue */}

        <div className="visual-footer">

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

export default VisualLearning;