import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

const resourceData = {
  1: {
    pptTopics: [
      "Python Basics",
      "NumPy and Arrays",
      "Pandas DataFrames",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Introduction to Machine Learning",
    ],
    dataset: "Toyota Corolla Dataset",
    datasetDescription:
      "Practice data cleaning, exploration, visualization and analysis using a real-world automobile dataset.",
    activities: [
      "Clean missing or incorrect data",
      "Create frequency tables",
      "Perform exploratory data analysis",
      "Create charts using Matplotlib",
      "Find relationships between variables",
    ],
  },

  2: {
    pptTopics: [
      "Introduction to Artificial Intelligence",
      "Machine Learning Fundamentals",
      "Neural Networks",
      "Deep Learning",
      "AI Applications",
      "AI Project Development",
    ],
    dataset: "AI Practice Dataset",
    datasetDescription:
      "Explore a structured dataset and understand how artificial intelligence techniques can be applied to real-world problems.",
    activities: [
      "Identify an AI problem",
      "Prepare the dataset",
      "Select suitable AI techniques",
      "Analyze model results",
      "Design a simple AI solution",
    ],
  },

  3: {
    pptTopics: [
      "Machine Learning Fundamentals",
      "Supervised Learning",
      "Regression",
      "Classification",
      "Unsupervised Learning",
      "Model Evaluation",
    ],
    dataset: "Machine Learning Practice Dataset",
    datasetDescription:
      "Use the dataset to practice regression, classification and model evaluation techniques.",
    activities: [
      "Prepare training data",
      "Build a regression model",
      "Build a classification model",
      "Evaluate model performance",
      "Compare prediction results",
    ],
  },

  4: {
    pptTopics: [
      "HTML Fundamentals",
      "CSS Styling",
      "JavaScript Basics",
      "Responsive Web Design",
      "React Fundamentals",
      "Frontend Projects",
    ],
    dataset: "Web Development Practice Files",
    datasetDescription:
      "Practice building webpages and frontend interfaces using HTML, CSS, JavaScript and React.",
    activities: [
      "Create an HTML webpage",
      "Design a responsive layout",
      "Add JavaScript interactions",
      "Build reusable React components",
      "Create a small frontend project",
    ],
  },

  5: {
    pptTopics: [
      "Database Fundamentals",
      "SQL Basics",
      "SELECT Queries",
      "Joins",
      "Aggregation",
      "Subqueries",
    ],
    dataset: "Employee and Sales Database",
    datasetDescription:
      "Practice SQL queries using structured tables containing employee, customer and sales information.",
    activities: [
      "Write SELECT queries",
      "Filter records using WHERE",
      "Use GROUP BY and aggregate functions",
      "Perform table joins",
      "Write subqueries",
    ],
  },

  6: {
    pptTopics: [
      "Data Analytics Fundamentals",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Excel Analysis",
      "Power BI Dashboards",
    ],
    dataset: "Sales and Customer Dataset",
    datasetDescription:
      "Analyze sales, customers, products and regional performance to discover useful business insights.",
    activities: [
      "Clean the sales data",
      "Calculate important metrics",
      "Perform exploratory analysis",
      "Create visualizations",
      "Build a business dashboard",
    ],
  },

  7: {
    pptTopics: [
      "Introduction to Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "AI Tools",
      "AI Applications",
      "Generative AI Projects",
    ],
    dataset: "Generative AI Practice Data",
    datasetDescription:
      "Work with example prompts and structured information to understand how generative AI systems can be used.",
    activities: [
      "Write effective prompts",
      "Compare different prompts",
      "Analyze AI-generated responses",
      "Design an AI workflow",
      "Build a small AI application",
    ],
  },

  8: {
    pptTopics: [
      "Cloud Computing Fundamentals",
      "Cloud Service Models",
      "Cloud Deployment Models",
      "Cloud Storage",
      "Cloud Applications",
      "Cloud Architecture",
    ],
    dataset: "Cloud Usage Dataset",
    datasetDescription:
      "Explore example cloud usage information and understand basic cloud resource management.",
    activities: [
      "Identify cloud service models",
      "Compare deployment models",
      "Analyze cloud usage",
      "Understand cloud storage",
      "Design a simple cloud architecture",
    ],
  },

  9: {
    pptTopics: [
      "Cyber Security Fundamentals",
      "Security Threats",
      "Vulnerabilities",
      "Authentication",
      "Network Security",
      "Security Practices",
    ],
    dataset: "Security Events Dataset",
    datasetDescription:
      "Analyze example security events and identify common patterns, threats and vulnerabilities.",
    activities: [
      "Identify security threats",
      "Analyze suspicious events",
      "Understand authentication methods",
      "Identify vulnerabilities",
      "Suggest security practices",
    ],
  },

  10: {
    pptTopics: [
      "Python Introduction",
      "Variables and Data Types",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Lists and Dictionaries",
    ],
    dataset: "Python Practice Dataset",
    datasetDescription:
      "Use simple structured data to practice Python programming concepts and data handling.",
    activities: [
      "Work with variables",
      "Use conditional statements",
      "Create loops",
      "Write functions",
      "Manipulate lists and dictionaries",
    ],
  },
};

function Resources() {
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

  const resources =
    resourceData[course.id] || {
      pptTopics: course.skills,
      dataset: `${course.title} Practice Dataset`,
      datasetDescription:
        "Practice the concepts covered in this course using relevant learning data.",
      activities: [
        "Review the course concepts",
        "Practice the important skills",
        "Apply the concepts to examples",
        "Analyze your results",
        "Complete the practice activity",
      ],
    };

  return (
    <div className="resources-page">
      <Navbar />

      <main className="resources-container">

        {/* Back Button */}

        <Link
          to={`/learning/${course.id}`}
          className="back-learning-btn"
        >
          ← Back to Learning
        </Link>

        {/* Header */}

        <section className="resources-header">

          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p>
            Course-specific learning resources,
            datasets and practical activities.
          </p>

        </section>

        {/* =========================
            PPT SECTION
        ========================= */}

        <section className="resources-section">

          <div className="resource-section-heading">

            <div>

              <span className="resource-type">
                PRESENTATION
              </span>

              <h2>📑 Course PPT Topics</h2>

              <p>
                The presentation covers the following
                important topics from {course.title}.
              </p>

            </div>

          </div>

          <div className="ppt-topic-grid">

            {resources.pptTopics.map(
              (topic, index) => (
                <div
                  className="ppt-topic-card"
                  key={topic}
                >

                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <h3>{topic}</h3>

                  <p>
                    Review this topic as part of
                    your course learning material.
                  </p>

                </div>
              )
            )}

          </div>

          <button
            className="resource-main-btn"
            type="button"
          >
            View Course PPT
          </button>

        </section>

        {/* =========================
            DATASET SECTION
        ========================= */}

        <section className="resources-section">

          <span className="resource-type">
            DATASET
          </span>

          <h2>
            📊 {resources.dataset}
          </h2>

          <p>
            {resources.datasetDescription}
          </p>

          <div className="dataset-info-grid">

            <div>
              <span>📊</span>

              <strong>
                Dataset Type
              </strong>

              <small>
                Course-related practice data
              </small>
            </div>

            <div>
              <span>🧪</span>

              <strong>
                Purpose
              </strong>

              <small>
                Practical learning and analysis
              </small>
            </div>

            <div>
              <span>📚</span>

              <strong>
                Use For
              </strong>

              <small>
                Exercises and projects
              </small>
            </div>

          </div>

          <button
            className="resource-main-btn"
            type="button"
          >
            View Dataset
          </button>

        </section>

        {/* =========================
            PRACTICE SECTION
        ========================= */}

        <section className="resources-section">

          <span className="resource-type">
            PRACTICE
          </span>

          <h2>
            🧪 Practice Activities
          </h2>

          <p>
            Complete these activities to apply the
            concepts you learned in {course.title}.
          </p>

          <div className="practice-activity-list">

            {resources.activities.map(
              (activity, index) => (
                <div
                  className="practice-activity"
                  key={activity}
                >

                  <div className="practice-number">
                    {index + 1}
                  </div>

                  <div>

                    <h3>{activity}</h3>

                    <p>
                      Apply your knowledge and
                      complete this activity.
                    </p>

                  </div>

                  <Link
                    to={`/practice/${course.id}`}
                    className="practice-start-btn"
                  >
                    Start
                  </Link>

                </div>
              )
            )}

          </div>

        </section>

        {/* =========================
            SKILLS SECTION
        ========================= */}

        <section className="resources-section">

          <h2>
            🎯 Skills Supported
          </h2>

          <p>
            These resources help you strengthen the
            following course skills.
          </p>

          <div className="skills-list">

            {course.skills.map(
              (skill, index) => (
                <span key={index}>
                  {skill}
                </span>
              )
            )}

          </div>

        </section>

        {/* =========================
            LEARNING ORDER
        ========================= */}

        <section className="resources-section">

          <h2>
            💡 Recommended Learning Order
          </h2>

          <div className="resource-tips">

            <div>

              <span>01</span>

              <h3>
                Study
              </h3>

              <p>
                Review the presentation topics and
                understand the concepts.
              </p>

            </div>

            <div>

              <span>02</span>

              <h3>
                Practice
              </h3>

              <p>
                Use the dataset and activities to
                apply what you learned.
              </p>

            </div>

            <div>

              <span>03</span>

              <h3>
                Revise
              </h3>

              <p>
                Review your notes before attempting
                the final assessment.
              </p>

            </div>

          </div>

        </section>

        {/* Footer Button */}

        <div className="resources-footer">

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

export default Resources;