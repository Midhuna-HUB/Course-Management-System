import React from "react";
import Navbar from "../Components/Navbar";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      <section className="about-hero">
        <h1>About CourseHub</h1>
        <p>
          A simple and user-friendly platform to discover, enroll, and manage
          courses.
        </p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>What is CourseHub?</h2>
          <p>
            CourseHub is a student course management platform designed to help
            students easily browse courses, view course details, enroll in
            courses, and manage their learning journey.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3>For Students</h3>
            <p>Browse and explore available courses.</p>
            <p>View detailed course information.</p>
            <p>Enroll in courses.</p>
            <p>Manage your enrolled courses.</p>
          </div>

          <div className="about-card">
            <h3>For Administrators</h3>
            <p>Add new courses.</p>
            <p>Edit course information.</p>
            <p>Manage available courses.</p>
            <p>Access the admin dashboard.</p>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Goal</h2>
          <p>
            Our goal is to provide a simple and organized platform that makes
            course discovery and course management easier for students and
            administrators.
          </p>
        </div>

        <div className="technology-section">
          <h2>Technologies Used</h2>

          <div className="technology-list">
            <span>React.js</span>
            <span>React Router</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;