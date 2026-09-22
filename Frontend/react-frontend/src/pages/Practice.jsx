import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

const practiceData = {
  1: {
    questions: [
      {
        question: "Which library is mainly used for numerical computing in Python?",
        options: ["Pandas", "NumPy", "Matplotlib", "Flask"],
        answer: "NumPy",
      },
      {
        question: "Which Pandas function is used to read a CSV file?",
        options: ["read_csv()", "open_csv()", "load_csv()", "csv_read()"],
        answer: "read_csv()",
      },
    ],
  },

  2: {
    questions: [
      {
        question: "What does AI stand for?",
        options: [
          "Automated Internet",
          "Artificial Intelligence",
          "Advanced Information",
          "Artificial Internet",
        ],
        answer: "Artificial Intelligence",
      },
      {
        question: "Which technology is commonly used to build neural networks?",
        options: [
          "Deep Learning",
          "HTML",
          "SQL",
          "CSS",
        ],
        answer: "Deep Learning",
      },
    ],
  },

  3: {
    questions: [
      {
        question: "Which type of machine learning uses labelled data?",
        options: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Reinforcement Learning",
          "Random Learning",
        ],
        answer: "Supervised Learning",
      },
      {
        question: "Which technique is used to predict a continuous value?",
        options: [
          "Classification",
          "Regression",
          "Clustering",
          "Association",
        ],
        answer: "Regression",
      },
    ],
  },

  4: {
    questions: [
      {
        question: "Which language is used to structure a webpage?",
        options: ["CSS", "HTML", "Python", "SQL"],
        answer: "HTML",
      },
      {
        question: "Which technology is mainly used for styling webpages?",
        options: ["HTML", "CSS", "Python", "SQL"],
        answer: "CSS",
      },
    ],
  },

  5: {
    questions: [
      {
        question: "Which SQL command is used to retrieve data?",
        options: ["SELECT", "INSERT", "DELETE", "UPDATE"],
        answer: "SELECT",
      },
      {
        question: "Which SQL clause is used to filter records?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "JOIN"],
        answer: "WHERE",
      },
    ],
  },

  6: {
    questions: [
      {
        question: "What is the main purpose of data cleaning?",
        options: [
          "To remove errors and inconsistencies",
          "To create websites",
          "To write SQL only",
          "To install software",
        ],
        answer: "To remove errors and inconsistencies",
      },
      {
        question: "Which tool is commonly used to create business dashboards?",
        options: [
          "Power BI",
          "Notepad",
          "Git",
          "HTML",
        ],
        answer: "Power BI",
      },
    ],
  },

  7: {
    questions: [
      {
        question: "What does LLM stand for?",
        options: [
          "Large Language Model",
          "Long Learning Machine",
          "Language Learning Method",
          "Large Logic Machine",
        ],
        answer: "Large Language Model",
      },
      {
        question: "What is prompt engineering?",
        options: [
          "Designing effective instructions for AI models",
          "Creating computer hardware",
          "Managing databases",
          "Designing websites",
        ],
        answer: "Designing effective instructions for AI models",
      },
    ],
  },

  8: {
    questions: [
      {
        question: "Which of the following is a cloud service model?",
        options: [
          "IaaS",
          "HTML",
          "CSS",
          "SQL",
        ],
        answer: "IaaS",
      },
      {
        question: "What is cloud storage used for?",
        options: [
          "Storing data on cloud infrastructure",
          "Creating HTML tags",
          "Writing Python loops",
          "Designing CSS",
        ],
        answer: "Storing data on cloud infrastructure",
      },
    ],
  },

  9: {
    questions: [
      {
        question: "What is authentication used for?",
        options: [
          "Verifying user identity",
          "Creating databases",
          "Designing webpages",
          "Cleaning datasets",
        ],
        answer: "Verifying user identity",
      },
      {
        question: "Which is an example of a cybersecurity threat?",
        options: [
          "Phishing",
          "Data visualization",
          "HTML",
          "Power BI",
        ],
        answer: "Phishing",
      },
    ],
  },

  10: {
    questions: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "fun", "define"],
        answer: "def",
      },
      {
        question: "Which Python data structure stores key-value pairs?",
        options: [
          "List",
          "Tuple",
          "Dictionary",
          "Set",
        ],
        answer: "Dictionary",
      },
    ],
  },
};

function Practice() {
  const { id } = useParams();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  const questions =
    practiceData[Number(id)]?.questions || [];

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [showResult, setShowResult] =
    useState(false);

  const [score, setScore] =
    useState(0);

  const [completed, setCompleted] =
    useState(false);

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

  if (questions.length === 0) {
    return (
      <div className="practice-page">
        <Navbar />

        <main className="practice-container">
          <Link
            to={`/resources/${course.id}`}
            className="practice-back-btn"
          >
            ← Back to Resources
          </Link>

          <section className="practice-empty">
            <div className="practice-empty-icon">
              🧪
            </div>

            <h1>Practice Coming Soon</h1>

            <p>
              Practice activities for{" "}
              <strong>{course.title}</strong> will
              be added soon.
            </p>

            <Link
              to={`/resources/${course.id}`}
              className="practice-main-btn"
            >
              Back to Resources
            </Link>
          </section>
        </main>
      </div>
    );
  }

  const question = questions[currentQuestion];

  const handleCheckAnswer = () => {
    if (!selectedAnswer) {
      return;
    }

    setShowResult(true);

    if (selectedAnswer === question.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(
        (previousQuestion) => previousQuestion + 1
      );

      setSelectedAnswer("");
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const restartPractice = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  return (
    <div className="practice-page">
      <Navbar />

      <main className="practice-container">

        <Link
          to={`/resources/${course.id}`}
          className="practice-back-btn"
        >
          ← Back to Resources
        </Link>

        <section className="practice-header">
          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.title} Practice</h1>

          <p>
            Test your understanding of the concepts
            covered in this course.
          </p>
        </section>

        {!completed ? (
          <section className="practice-card">

            <div className="practice-top">

              <div>
                <span className="practice-label">
                  PRACTICE QUESTION
                </span>

                <h2>
                  Question {currentQuestion + 1} of{" "}
                  {questions.length}
                </h2>
              </div>

              <div className="practice-score">
                Score: {score}
              </div>

            </div>

            <div className="practice-progress">
              <div
                className="practice-progress-bar"
                style={{
                  width: `${
                    ((currentQuestion + 1) /
                      questions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>

            <div className="practice-question">
              <h2>{question.question}</h2>
            </div>

            <div className="practice-options">

              {question.options.map(
                (option, index) => {

                  let optionClass =
                    "practice-option";

                  if (showResult) {
                    if (
                      option === question.answer
                    ) {
                      optionClass +=
                        " correct-option";
                    } else if (
                      option === selectedAnswer
                    ) {
                      optionClass +=
                        " wrong-option";
                    }
                  } else if (
                    selectedAnswer === option
                  ) {
                    optionClass +=
                      " selected-option";
                  }

                  return (
                    <button
                      key={option}
                      className={optionClass}
                      onClick={() =>
                        !showResult &&
                        setSelectedAnswer(option)
                      }
                    >
                      <span className="option-number">
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <span>
                        {option}
                      </span>
                    </button>
                  );
                }
              )}

            </div>

            {showResult && (
              <div
                className={
                  selectedAnswer === question.answer
                    ? "practice-feedback correct-feedback"
                    : "practice-feedback wrong-feedback"
                }
              >
                {selectedAnswer === question.answer ? (
                  <>
                    <strong>✓ Correct!</strong>
                    <p>
                      Great job. Your answer is
                      correct.
                    </p>
                  </>
                ) : (
                  <>
                    <strong>✗ Incorrect</strong>
                    <p>
                      Correct answer:{" "}
                      <strong>
                        {question.answer}
                      </strong>
                    </p>
                  </>
                )}
              </div>
            )}

            <div className="practice-actions">

              {!showResult ? (
                <button
                  className="practice-main-btn"
                  onClick={handleCheckAnswer}
                  disabled={!selectedAnswer}
                >
                  Check Answer
                </button>
              ) : (
                <button
                  className="practice-main-btn"
                  onClick={handleNextQuestion}
                >
                  {currentQuestion ===
                  questions.length - 1
                    ? "Finish Practice"
                    : "Next Question →"}
                </button>
              )}

            </div>

          </section>
        ) : (
          <section className="practice-complete">

            <div className="practice-complete-icon">
              🎉
            </div>

            <span className="practice-label">
              PRACTICE COMPLETED
            </span>

            <h1>Well Done!</h1>

            <p>
              You completed the practice activity
              for <strong>{course.title}</strong>.
            </p>

            <div className="practice-final-score">

              <div>
                <span>Your Score</span>

                <strong>
                  {score}/{questions.length}
                </strong>
              </div>

              <div>
                <span>Percentage</span>

                <strong>
                  {percentage}%
                </strong>
              </div>

            </div>

            <div className="practice-complete-actions">

              <button
                className="practice-secondary-btn"
                onClick={restartPractice}
              >
                Try Again
              </button>

              <Link
                to={`/resources/${course.id}`}
                className="practice-main-btn"
              >
                Back to Resources
              </Link>

            </div>

          </section>
        )}

      </main>
    </div>
  );
}

export default Practice;