import React from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div>
        <Navbar />

        <div
          style={{
            textAlign: "center",
            padding: "80px 20px",
          }}
        >
          <h1>Course Not Found</h1>

          <Link to="/courses">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  /* =========================
     GET CURRENT STUDENT
  ========================= */

  const currentStudent = JSON.parse(
    localStorage.getItem(
      "coursehub_current_student"
    )
  );

  /* =========================
     CHECK ENROLLMENT
  ========================= */

  const enrolledCourses =
    currentStudent?.enrolledCourses || [];

  const isEnrolled = enrolledCourses.some(
    (item) => item.id === course.id
  );

  /* =========================
     ENROLL COURSE
  ========================= */

  const handleEnroll = () => {

    // Student must be logged in
    if (!currentStudent) {
      alert(
        "Please login or register before enrolling in a course."
      );

      navigate("/login");

      return;
    }

    // Get latest student list
    const students =
      JSON.parse(
        localStorage.getItem(
          "coursehub_students"
        )
      ) || [];

    // Find current student
    const studentIndex = students.findIndex(
      (student) =>
        student.id === currentStudent.id
    );

    if (studentIndex === -1) {
      alert(
        "Student account not found. Please login again."
      );

      navigate("/login");

      return;
    }

    // Get student's enrolled courses
    const studentCourses =
      students[studentIndex].enrolledCourses || [];

    // Check if already enrolled
    const alreadyEnrolled =
      studentCourses.some(
        (item) => item.id === course.id
      );

    if (!alreadyEnrolled) {

      const enrolledCourse = {
        ...course,

        progress: 0,

        completedLessons: [],

        completed: false,

        quizPassed: false,

        quizScore: null,
      };

      // Add course to student's courses
      studentCourses.push(enrolledCourse);

      // Update student
      students[studentIndex] = {
        ...students[studentIndex],

        enrolledCourses:
          studentCourses,
      };

      // Save all students
      localStorage.setItem(
        "coursehub_students",
        JSON.stringify(students)
      );

      // Update current student
      localStorage.setItem(
        "coursehub_current_student",
        JSON.stringify(
          students[studentIndex]
        )
      );
    }

    // Go to enrollment success
    navigate("/enrollment-success");
  };

  return (
    <div className="course-detail-page">

      <Navbar />


      {/* =========================
          COURSE HERO
      ========================= */}

      <section className="course-detail-container">

        <div className="course-detail-image">

          <img
            src={course.image}
            alt={course.title}
          />

        </div>


        <div className="course-detail-content">

          <span className="course-category">
            {course.category}
          </span>


          <h1>
            {course.title}
          </h1>


          <p className="course-description">
            {course.description}
          </p>


          <div className="course-detail-info">

            <div>

              <strong>
                Level
              </strong>

              <span>
                {course.level}
              </span>

            </div>


            <div>

              <strong>
                Duration
              </strong>

              <span>
                {course.duration}
              </span>

            </div>

          </div>


          {/* =========================
              ENROLL / CONTINUE
          ========================= */}

          {isEnrolled ? (

            <Link
              to={`/learning/${course.id}`}
              className="enroll-btn"
            >
              Continue Learning
            </Link>

          ) : (

            <button
              className="enroll-btn"
              onClick={handleEnroll}
            >
              Enroll Now
            </button>

          )}

        </div>

      </section>


      {/* =========================
          COURSE INFORMATION
      ========================= */}

      <section className="course-extra-container">


        {/* =========================
            SKILLS
        ========================= */}

        <div className="course-extra-section">

          <h2>
            Skills You Will Learn
          </h2>


          <div className="skills-list">

            {course.skills.map(
              (skill, index) => (

                <span
                  key={index}
                >
                  {skill}
                </span>

              )
            )}

          </div>

        </div>


        {/* =========================
            JOB ROLES
        ========================= */}

        <div className="course-extra-section">

          <h2>
            Related Job Roles
          </h2>


          <div className="job-roles-list">

            {course.jobRoles.map(
              (role, index) => (

                <div
                  className="job-role-card"
                  key={index}
                >

                  <h3>
                    {role}
                  </h3>


                  <p>
                    Build the skills required
                    for this career path.
                  </p>

                </div>

              )
            )}

          </div>

        </div>


        {/* =========================
            LEARNING BENEFITS
        ========================= */}

        <div className="course-extra-section">

          <h2>
            What You Will Get
          </h2>


          <ul className="course-benefits">

            <li>
              Video lessons
            </li>

            <li>
              Detailed learning notes
            </li>

            <li>
              Diagrams and examples
            </li>

            <li>
              PPT learning resources
            </li>

            <li>
              Course-related datasets
            </li>

            <li>
              Practice activities
            </li>

            <li>
              Course-related projects
            </li>

            <li>
              Final assessment
            </li>

            <li>
              Certificate after passing
              the final quiz
            </li>

          </ul>

        </div>


        {/* =========================
            LEARNING PROCESS
        ========================= */}

        <div className="course-extra-section">

          <h2>
            Learning Process
          </h2>


          <div className="learning-process">


            {/* STEP 01 */}

            <div className="learning-process-step">

              <div className="process-number">
                01
              </div>


              <div>

                <h3>
                  Learn
                </h3>

                <p>
                  Study the course lessons,
                  notes and learning materials.
                </p>

              </div>

            </div>


            {/* STEP 02 */}

            <div className="learning-process-step">

              <div className="process-number">
                02
              </div>


              <div>

                <h3>
                  Practice
                </h3>

                <p>
                  Apply your knowledge through
                  activities and practical tasks.
                </p>

              </div>

            </div>


            {/* STEP 03 */}

            <div className="learning-process-step">

              <div className="process-number">
                03
              </div>


              <div>

                <h3>
                  Assessment
                </h3>

                <p>
                  Complete the final quiz after
                  finishing the required lessons.
                </p>

              </div>

            </div>


            {/* STEP 04 */}

            <div className="learning-process-step">

              <div className="process-number">
                04
              </div>


              <div>

                <h3>
                  Certificate
                </h3>

                <p>
                  Pass the final assessment and
                  receive your course certificate.
                </p>

              </div>

            </div>


          </div>

        </div>


      </section>

    </div>
  );
}

export default CourseDetail;