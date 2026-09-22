import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      code: "PY",
      title: "Python for Beginners",
      category: "Programming",
      level: "Beginner",
      duration: "8 Weeks",
      lessons: 25,
      status: "Published",
    },
    {
      id: 2,
      code: "DA",
      title: "Data Analytics with Excel",
      category: "Data Analytics",
      level: "Beginner",
      duration: "6 Weeks",
      lessons: 20,
      status: "Published",
    },
    {
      id: 3,
      code: "ML",
      title: "Introduction to Machine Learning",
      category: "Artificial Intelligence",
      level: "Intermediate",
      duration: "10 Weeks",
      lessons: 28,
      status: "Published",
    },
    {
      id: 4,
      code: "WD",
      title: "Web Development Fundamentals",
      category: "Web Development",
      level: "Beginner",
      duration: "8 Weeks",
      lessons: 24,
      status: "Published",
    },
    {
      id: 5,
      code: "UX",
      title: "UI/UX Design Fundamentals",
      category: "Design",
      level: "Beginner",
      duration: "5 Weeks",
      lessons: 18,
      status: "Draft",
    },
    {
      id: 6,
      code: "SQL",
      title: "SQL and Database Essentials",
      category: "Database",
      level: "Intermediate",
      duration: "6 Weeks",
      lessons: 22,
      status: "Published",
    },
  ];

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <div className="admin-dashboard-page">

      {/* Admin Navbar */}
      <header className="admin-dashboard-navbar">

        <Link to="/" className="admin-dashboard-logo">
          <div>◆</div>

          <section>
            <strong>CourseHub</strong>
            <span>Admin Panel</span>
          </section>
        </Link>

        <nav className="admin-dashboard-nav">
          <Link to="/admin/dashboard" className="active">
            Dashboard
          </Link>

          <Link to="/admin/add-course">
            Add Course
          </Link>

          <Link to="/courses">
            View Website
          </Link>
        </nav>

        <button
          className="admin-logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </header>

      {/* Main */}
      <main className="admin-dashboard-main">

        {/* Welcome */}
        <section className="admin-dashboard-welcome">

          <div>
            <p className="admin-dashboard-label">
              COURSEHUB ADMINISTRATION
            </p>

            <h1>
              Welcome back,
              <br />
              <span>Admin.</span>
            </h1>

            <p>
              Manage your courses and keep your learning platform
              organized from one place.
            </p>
          </div>

          <Link
            to="/admin/add-course"
            className="admin-add-course-button"
          >
            + Add New Course
          </Link>

        </section>

        {/* Quick Management */}
        <section className="admin-quick-section">

          <div className="admin-section-heading">
            <div>
              <p>QUICK MANAGEMENT</p>
              <h2>CourseHub overview</h2>
            </div>
          </div>

          <div className="admin-management-grid">

            <div className="admin-management-card">
              <div className="management-icon">▣</div>

              <div>
                <span>AVAILABLE COURSES</span>
                <strong>{courses.length}</strong>
              </div>
            </div>

            <div className="admin-management-card">
              <div className="management-icon">✓</div>

              <div>
                <span>PUBLISHED</span>
                <strong>
                  {courses.filter(
                    (course) => course.status === "Published"
                  ).length}
                </strong>
              </div>
            </div>

            <div className="admin-management-card">
              <div className="management-icon">✎</div>

              <div>
                <span>DRAFTS</span>
                <strong>
                  {courses.filter(
                    (course) => course.status === "Draft"
                  ).length}
                </strong>
              </div>
            </div>

            <div className="admin-management-card">
              <div className="management-icon">+</div>

              <div>
                <span>CREATE</span>
                <strong>New</strong>
              </div>
            </div>

          </div>

        </section>

        {/* Course Management */}
        <section className="admin-course-section">

          <div className="admin-section-heading course-heading">

            <div>
              <p>COURSE MANAGEMENT</p>
              <h2>Your courses</h2>
            </div>

            <Link to="/admin/add-course">
              Add Course →
            </Link>

          </div>

          <div className="admin-course-table">

            <div className="admin-table-header">
              <span>COURSE</span>
              <span>CATEGORY</span>
              <span>LEVEL</span>
              <span>LESSONS</span>
              <span>STATUS</span>
              <span>ACTION</span>
            </div>

            {courses.map((course) => (

              <div
                className="admin-course-row"
                key={course.id}
              >

                <div className="admin-course-name">

                  <div className="admin-course-code">
                    {course.code}
                  </div>

                  <div>
                    <strong>{course.title}</strong>
                    <small>{course.duration}</small>
                  </div>

                </div>

                <span className="admin-category">
                  {course.category}
                </span>

                <span className="admin-level">
                  {course.level}
                </span>

                <span className="admin-lessons">
                  {course.lessons}
                </span>

                <span
                  className={`admin-status ${
                    course.status.toLowerCase()
                  }`}
                >
                  {course.status}
                </span>

                <Link
                  to={`/admin/edit-course/${course.id}`}
                  className="admin-edit-button"
                >
                  Edit
                </Link>

              </div>

            ))}

          </div>

        </section>

        {/* Bottom Actions */}
        <section className="admin-bottom-actions">

          <div className="admin-action-card">

            <div className="admin-action-icon">
              +
            </div>

            <div>
              <h3>Add a new course</h3>
              <p>
                Create and publish a new learning experience.
              </p>
            </div>

            <Link to="/admin/add-course">
              →
            </Link>

          </div>

          <div className="admin-action-card">

            <div className="admin-action-icon">
              ↗
            </div>

            <div>
              <h3>View student website</h3>
              <p>
                Preview the public CourseHub experience.
              </p>
            </div>

            <Link to="/" >
              →
            </Link>

          </div>

        </section>

      </main>

      <footer className="admin-dashboard-footer">
        <span>CourseHub Administration</span>
        <p>© 2026 CourseHub. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default AdminDashboard;
