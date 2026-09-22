import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

function BrowseCourses() {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const levels = [
    "All",
    ...new Set(courses.map((course) => course.level)),
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      category === "All" ||
      course.category === category;

    const matchesLevel =
      level === "All" ||
      course.level === level;

    const searchText = `
      ${course.title}
      ${course.category}
      ${course.description}
      ${course.skills.join(" ")}
      ${course.jobRoles.join(" ")}
    `.toLowerCase();

    const matchesSearch = searchText.includes(
      searchTerm.toLowerCase().trim()
    );

    return (
      matchesCategory &&
      matchesLevel &&
      matchesSearch
    );
  });

  return (
    <div className="browse-page">

      <Navbar />

      <main className="browse-container">

        {/* Header */}

        <section className="browse-header">

          <p className="browse-label">
            EXPLORE COURSES
          </p>

          <h1>
            Browse Courses
          </h1>

          <p>
            Find the right course based on your interests,
            skill level and career goals.
          </p>

        </section>

        {/* Filters */}

        <section className="browse-filters">

          <div className="browse-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>

          <div className="filter-group">

            <label>
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >

              {categories.map((item) => (
                <option
                  value={item}
                  key={item}
                >
                  {item}
                </option>
              ))}

            </select>

          </div>

          <div className="filter-group">

            <label>
              Level
            </label>

            <select
              value={level}
              onChange={(e) =>
                setLevel(e.target.value)
              }
            >

              {levels.map((item) => (
                <option
                  value={item}
                  key={item}
                >
                  {item}
                </option>
              ))}

            </select>

          </div>

        </section>

        {/* Results */}

        <section className="browse-results">

          <div className="browse-results-header">

            <h2>
              Available Courses
            </h2>

            <span>
              {filteredCourses.length} course
              {filteredCourses.length !== 1
                ? "s"
                : ""}
            </span>

          </div>

          {filteredCourses.length === 0 ? (

            <div className="browse-empty">

              <div>
                🔎
              </div>

              <h3>
                No Courses Found
              </h3>

              <p>
                Try changing your search or filters.
              </p>

            </div>

          ) : (

            <div className="browse-course-grid">

              {filteredCourses.map((course) => (

                <div
                  className="browse-course-card"
                  key={course.id}
                >

                  <img
                    src={course.image}
                    alt={course.title}
                  />

                  <div className="browse-course-content">

                    <span className="browse-category">
                      {course.category}
                    </span>

                    <h3>
                      {course.title}
                    </h3>

                    <p>
                      {course.description}
                    </p>

                    <div className="browse-course-details">

                      <span>
                        📊 {course.level}
                      </span>

                      <span>
                        ⏱ {course.duration}
                      </span>

                    </div>

                    <Link
                      to={`/course/${course.id}`}
                      className="browse-view-btn"
                    >
                      View Course
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

      </main>

    </div>
  );
}

export default BrowseCourses;