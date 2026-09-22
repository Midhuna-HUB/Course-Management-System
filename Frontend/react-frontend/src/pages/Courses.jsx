import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

function Courses() {
  return (
    <div className="courses-page">
      <Navbar />

      <section className="courses-header">
        <h1>Available Courses</h1>
        <p>
          Explore our courses and choose the one you want to learn.
        </p>
      </section>

      <section className="courses-container">
        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />

              <div className="course-card-content">
                <span className="course-category">
                  {course.category}
                </span>

                <h2>{course.title}</h2>

                <p>{course.description}</p>

                <div className="course-info">
                  <span>Level: {course.level}</span>
                  <span>Duration: {course.duration}</span>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="view-course-btn"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Courses;