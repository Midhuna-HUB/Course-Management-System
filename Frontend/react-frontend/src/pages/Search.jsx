import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("query") || ""
  );

  useEffect(() => {
    const query = searchParams.get("query") || "";
    setSearchTerm(query);
  }, [searchParams]);

  const handleSearch = (value) => {
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchParams({});
    } else {
      setSearchParams({
        query: value,
      });
    }
  };

  const filteredCourses = courses.filter((course) => {
    const searchableText = `
      ${course.title}
      ${course.category}
      ${course.level}
      ${course.description}
      ${course.skills.join(" ")}
      ${course.jobRoles.join(" ")}
    `.toLowerCase();

    return searchableText.includes(
      searchTerm.toLowerCase().trim()
    );
  });

  return (
    <div className="search-page">

      <Navbar />

      <main className="search-container">

        {/* Header */}

        <div className="search-header">

          <h1>Search Courses</h1>

          <p>
            Find the course you want to learn.
          </p>

        </div>

        {/* Search Box */}

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search by course, category or skill..."
            value={searchTerm}
            onChange={(e) =>
              handleSearch(e.target.value)
            }
          />

        </div>

        {/* Results */}

        <div className="search-results">

          <h2>
            {searchTerm.trim()
              ? `Search Results (${filteredCourses.length})`
              : "Available Courses"}
          </h2>

          {filteredCourses.length === 0 ? (

            <div className="no-search-results">

              <div>🔎</div>

              <h3>No Courses Found</h3>

              <p>
                Try searching with another course name,
                category or skill.
              </p>

            </div>

          ) : (

            <div className="search-course-grid">

              {filteredCourses.map((course) => (

                <div
                  className="search-course-card"
                  key={course.id}
                >

                  <img
                    src={course.image}
                    alt={course.title}
                  />

                  <div className="search-course-content">

                    <span>
                      {course.category}
                    </span>

                    <h3>
                      {course.title}
                    </h3>

                    <p>
                      {course.description}
                    </p>

                    <div className="search-course-info">

                      <small>
                        Level: {course.level}
                      </small>

                      <small>
                        {course.duration}
                      </small>

                    </div>

                    <Link
                      to={`/course/${course.id}`}
                    >
                      View Course
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default Search;