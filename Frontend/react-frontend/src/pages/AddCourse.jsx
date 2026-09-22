import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCourse.css";

function AddCourse() {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    category: "",
    instructor: "",
    level: "",
    duration: "",
    description: "",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Course Added:", course);

    navigate("/dashboard");
  };

  return (
    <div className="add-course-page">
      <div className="add-course-container">

        <button
          className="add-course-back"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>

        <h1>Add New Course</h1>
        <p className="add-course-subtitle">
          Create a new course by filling in the details below.
        </p>

        <form onSubmit={handleSubmit} className="add-course-form">

          <div className="form-group">
            <label>Course Title</label>
            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              placeholder="Enter course title"
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={course.category}
              onChange={handleChange}
              placeholder="Enter category"
              required
            />
          </div>

          <div className="form-group">
            <label>Instructor</label>
            <input
              type="text"
              name="instructor"
              value={course.instructor}
              onChange={handleChange}
              placeholder="Enter instructor name"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Level</label>
              <select
                name="level"
                value={course.level}
                onChange={handleChange}
                required
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                value={course.duration}
                onChange={handleChange}
                placeholder="e.g. 8 weeks"
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={course.description}
              onChange={handleChange}
              placeholder="Enter course description"
              rows="5"
              required
            />
          </div>

          <div className="add-course-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/dashboard")}
            >
              Cancel
            </button>

            <button type="submit" className="submit-btn">
              Add Course
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddCourse;