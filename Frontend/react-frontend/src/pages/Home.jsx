import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

import girlAvatar from "../assets/girl-avatar.png";
import boyAvatar from "../assets/boy-avatar.png";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const search = searchTerm.trim();

    if (search === "") {
      navigate("/search");
      return;
    }

    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="home-page">

      <Navbar />

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-text">

            <p className="small-heading">
              LEARN WITHOUT LIMITS
            </p>

            <h1>
              Learn New Skills
              <br />
              <span>Build Your Future</span>
            </h1>

            <p className="hero-description">
              Quality courses, expert instructors, and flexible
              learning — all in one place.
            </p>

            <div className="hero-search">

              <input
                type="text"
                placeholder="Search for courses, topics or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <button onClick={handleSearch}>
                Search
              </button>

            </div>

          </div>

          <div className="hero-image">

            <div className="hero-circle"></div>

            <div className="hero-decoration decoration-one">
              ✦
            </div>

            <div className="hero-decoration decoration-two">
              ◆
            </div>

            <img
              src={girlAvatar}
              alt="CourseHub student"
              className="hero-avatar"
            />

          </div>

        </div>

      </section>

      {/* FEATURED COURSES */}

      <section className="featured-section">

        <div className="section-heading">

          <div>
            <p>START LEARNING</p>

            <h2>
              Featured Courses
            </h2>
          </div>

          <Link to="/courses">
            View All →
          </Link>

        </div>

        <div className="course-grid">

          <div className="course-card">

            <div className="course-icon python-icon">
              🐍
            </div>

            <h3>
              Python for Data Science
            </h3>

            <p>
              Beginner
            </p>

            <div className="course-bottom">
              <span>★ 4.8</span>
              <span>₹999</span>
            </div>

          </div>

          <div className="course-card">

            <div className="course-icon web-icon">
              💻
            </div>

            <h3>
              Web Development
            </h3>

            <p>
              Beginner
            </p>

            <div className="course-bottom">
              <span>★ 4.7</span>
              <span>₹899</span>
            </div>

          </div>

          <div className="course-card">

            <div className="course-icon ml-icon">
              🧠
            </div>

            <h3>
              Machine Learning Basics
            </h3>

            <p>
              Intermediate
            </p>

            <div className="course-bottom">
              <span>★ 4.6</span>
              <span>₹1,199</span>
            </div>

          </div>

          <div className="course-card">

            <div className="course-icon design-icon">
              🎨
            </div>

            <h3>
              UI/UX Design
            </h3>

            <p>
              Beginner
            </p>

            <div className="course-bottom">
              <span>★ 4.5</span>
              <span>₹799</span>
            </div>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="categories-section">

        <div className="section-heading">

          <div>
            <p>EXPLORE</p>

            <h2>
              Popular Categories
            </h2>
          </div>

        </div>

        <div className="category-grid">

          <div className="category-card">
            <span>📊</span>
            <p>Data Science</p>
          </div>

          <div className="category-card">
            <span>💻</span>
            <p>Web Development</p>
          </div>

          <div className="category-card">
            <span>🤖</span>
            <p>AI & Machine Learning</p>
          </div>

          <div className="category-card">
            <span>🎨</span>
            <p>Design</p>
          </div>

          <div className="category-card">
            <span>💼</span>
            <p>Business</p>
          </div>

          <div className="category-card">
            <span>＋</span>
            <p>More</p>
          </div>

        </div>

      </section>

      {/* STUDENT TESTIMONIAL */}

      <section className="testimonial-section">

        <div className="testimonial-card">

          <div className="testimonial-user">

            <img
              src={girlAvatar}
              alt="Student"
            />

            <div>
              <h4>
                CourseHub Student
              </h4>

              <p>
                Learner
              </p>
            </div>

          </div>

          <p className="testimonial-text">
            "CourseHub made learning simple and enjoyable.
            The courses are well structured and easy to follow."
          </p>

        </div>

        <div className="learning-card">

          <img
            src={boyAvatar}
            alt="Student"
          />

          <div>

            <h3>
              Start Your Learning Journey
            </h3>

            <p>
              Join CourseHub and start learning today.
            </p>

            <Link to="/courses">
              Get Started →
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-logo">

          <div className="logo-icon">
            ◆
          </div>

          <div>
            <h2>CourseHub</h2>

            <p>
              Learn • Grow • Build Your Future
            </p>
          </div>

        </div>

        <p>
          © 2026 CourseHub. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;