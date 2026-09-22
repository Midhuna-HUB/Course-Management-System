import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditCourse.css";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "Python for Beginners",
    category: "Programming",
    level: "Beginner",
    duration: "8 Weeks",
    description:
      "Learn Python fundamentals, variables, conditions, loops, functions and more.",
    lessons: "25",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend/database update will be connected later.
    navigate("/admin/dashboard");
  };

  return (
    <div className="edit-course-page">

      <header className="edit-course-header">
        <Link to="/admin/dashboard" className="edit-course-logo">
          <div className="edit-logo-icon">◆</div>

          <div>
            <strong>CourseHub</strong>
            <span>Admin Panel</span>
          </div>
        </Link>

        <Link to="/admin/dashboard" className="back-dashboard-link">
          ← Back to Dashboard
        </Link>
      </header>

      <main className="edit-course-container">

        <div className="edit-course-heading">
          <div>
            <p>ADMINISTRATION</p>
            <h1>Edit Course</h1>
            <span>
              Update the course information and keep your learning content
              organized.
            </span>
          </div>

          <div className="course-id">
            Course ID: #{id || "001"}
          </div>
        </div>

        <form className="edit-course-form" onSubmit={handleSubmit}>

          {/* Basic Information */}
          <section className="form-section">

            <div className="form-section-title">
              <span>01</span>

              <div>
                <h2>Basic Information</h2>
                <p>Update the main details of your course.</p>
              </div>
            </div>

            <div className="form-grid">

              <div className="form-group full-width">
                <label htmlFor="title">Course Title</label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  value={course.title}
                  onChange={handleChange}
                  placeholder="Enter course title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>

                <select
                  id="category"
                  name="category"
                  value={course.category}
                  onChange={handleChange}
                >
                  <option>Programming</option>
                  <option>Data Analytics</option>
                  <option>Artificial Intelligence</option>
                  <option>Web Development</option>
                  <option>Design</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="level">Level</label>

                <select
                  id="level"
                  name="level"
                  value={course.level}
                  onChange={handleChange}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration</label>

                <input
                  id="duration"
                  name="duration"
                  type="text"
                  value={course.duration}
                  onChange={handleChange}
                  placeholder="Example: 8 Weeks"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lessons">Number of Lessons</label>

                <input
                  id="lessons"
                  name="lessons"
                  type="number"
                  min="1"
                  value={course.lessons}
                  onChange={handleChange}
                />
              </div>

            </div>
          </section>

          {/* Description */}
          <section className="form-section">

            <div className="form-section-title">
              <span>02</span>

              <div>
                <h2>Course Description</h2>
                <p>Tell students what they will learn.</p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>

              <textarea
                id="description"
                name="description"
                rows="6"
                value={course.description}
                onChange={handleChange}
                placeholder="Write a clear description of the course..."
              ></textarea>

              <small>
                Keep the description simple and useful for students.
              </small>
            </div>

          </section>

          {/* Course Preview */}
          <section className="form-section">

            <div className="form-section-title">
              <span>03</span>

              <div>
                <h2>Course Preview</h2>
                <p>Preview how the course information will appear.</p>
              </div>
            </div>

            <div className="course-preview">

              <div className="preview-icon">PY</div>

              <div className="preview-content">

                <span className="preview-category">
                  {course.category}
                </span>

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <div className="preview-details">
                  <span>● {course.level}</span>
                  <span>● {course.duration}</span>
                  <span>● {course.lessons} lessons</span>
                </div>

              </div>

            </div>

          </section>

          {/* Actions */}
          <div className="edit-course-actions">

            <Link
              to="/admin/dashboard"
              className="cancel-edit-button"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="save-course-button"
            >
              Save Changes
            </button>

          </div>

        </form>

      </main>

      <footer className="edit-course-footer">
        <span>CourseHub Admin Panel</span>
        <p>© 2026 CourseHub. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default EditCourse;
