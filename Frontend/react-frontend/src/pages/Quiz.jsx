import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import courses from "../data/courses";

const quizQuestions = {
  1: [
    {
      question: "Which library is commonly used for data analysis in Python?",
      options: ["React", "Pandas", "HTML", "CSS"],
      answer: "Pandas",
    },
    {
      question: "Which library is mainly used for numerical operations?",
      options: ["NumPy", "Django", "Flask", "Bootstrap"],
      answer: "NumPy",
    },
    {
      question: "Which library is commonly used for data visualization?",
      options: ["Matplotlib", "MySQL", "React", "PHP"],
      answer: "Matplotlib",
    },
    {
      question: "What does EDA stand for?",
      options: [
        "Easy Data Application",
        "Exploratory Data Analysis",
        "Electronic Data Algorithm",
        "External Data Access",
      ],
      answer: "Exploratory Data Analysis",
    },
    {
      question:
        "Which data structure is commonly represented as rows and columns in Pandas?",
      options: ["DataFrame", "Tuple", "Set", "String"],
      answer: "DataFrame",
    },
  ],

  2: [
    {
      question: "What does AI stand for?",
      options: [
        "Artificial Intelligence",
        "Automated Internet",
        "Advanced Input",
        "Application Interface",
      ],
      answer: "Artificial Intelligence",
    },
    {
      question: "Which field is a major part of AI?",
      options: [
        "Machine Learning",
        "Word Processing",
        "Graphic Design",
        "Typing",
      ],
      answer: "Machine Learning",
    },
    {
      question: "What is a neural network inspired by?",
      options: [
        "The human brain",
        "A database",
        "A web browser",
        "A spreadsheet",
      ],
      answer: "The human brain",
    },
    {
      question: "Which language is widely used in AI development?",
      options: ["Python", "HTML", "CSS", "SQL only"],
      answer: "Python",
    },
    {
      question: "What is machine learning?",
      options: [
        "A method where systems learn from data",
        "A database system",
        "A web design technique",
        "A file format",
      ],
      answer: "A method where systems learn from data",
    },
  ],

  3: [
    {
      question: "What is supervised learning?",
      options: [
        "Learning from labelled data",
        "Learning without data",
        "Only storing data",
        "Creating websites",
      ],
      answer: "Learning from labelled data",
    },
    {
      question: "Which is a classification algorithm?",
      options: [
        "Logistic Regression",
        "Linear Search",
        "HTML",
        "SQL Join",
      ],
      answer: "Logistic Regression",
    },
    {
      question: "What is regression generally used for?",
      options: [
        "Predicting continuous values",
        "Creating HTML pages",
        "Managing passwords",
        "Formatting text",
      ],
      answer: "Predicting continuous values",
    },
    {
      question: "What is overfitting?",
      options: [
        "A model learning training data too closely",
        "A database error",
        "Deleting a dataset",
        "Installing Python",
      ],
      answer: "A model learning training data too closely",
    },
    {
      question:
        "Which library is commonly used for machine learning in Python?",
      options: [
        "Scikit-learn",
        "React",
        "Bootstrap",
        "HTML",
      ],
      answer: "Scikit-learn",
    },
  ],

  4: [
    {
      question: "What does HTML define in a web page?",
      options: [
        "Structure",
        "Database",
        "Server hardware",
        "Machine learning",
      ],
      answer: "Structure",
    },
    {
      question: "What is CSS mainly used for?",
      options: [
        "Styling web pages",
        "Database queries",
        "Machine learning",
        "File compression",
      ],
      answer: "Styling web pages",
    },
    {
      question:
        "Which technology is used to build interactive web applications?",
      options: ["JavaScript", "SQL", "Excel", "Power BI"],
      answer: "JavaScript",
    },
    {
      question: "React is mainly used for building what?",
      options: [
        "User interfaces",
        "Databases",
        "Operating systems",
        "Antivirus software",
      ],
      answer: "User interfaces",
    },
    {
      question: "What does responsive design mean?",
      options: [
        "A website adapts to different screen sizes",
        "A website only works on desktop",
        "A website has no CSS",
        "A website cannot use images",
      ],
      answer: "A website adapts to different screen sizes",
    },
  ],

  5: [
    {
      question: "Which command is used to retrieve data from a SQL table?",
      options: ["SELECT", "PUSH", "DISPLAY", "SHOWDATA"],
      answer: "SELECT",
    },
    {
      question: "Which SQL clause is used to filter rows?",
      options: ["WHERE", "ORDER", "GROUP", "FILTERBY"],
      answer: "WHERE",
    },
    {
      question:
        "Which SQL operation combines rows from related tables?",
      options: ["JOIN", "MERGEFILE", "CONNECT", "LINK"],
      answer: "JOIN",
    },
    {
      question: "Which function calculates the average?",
      options: ["AVG()", "TOTAL()", "MEANVALUE()", "AVERAGEVALUE()"],
      answer: "AVG()",
    },
    {
      question: "MySQL is what type of system?",
      options: [
        "Relational database management system",
        "Web browser",
        "Programming language",
        "Operating system",
      ],
      answer: "Relational database management system",
    },
  ],

  6: [
    {
      question: "What is data cleaning?",
      options: [
        "Fixing or removing incorrect data",
        "Deleting all data",
        "Creating a website",
        "Writing HTML",
      ],
      answer: "Fixing or removing incorrect data",
    },
    {
      question: "Which tool is commonly used for dashboards?",
      options: ["Power BI", "Notepad", "Paint", "Calculator"],
      answer: "Power BI",
    },
    {
      question: "What is EDA?",
      options: [
        "Exploratory Data Analysis",
        "Electronic Data Access",
        "External Database Application",
        "Easy Data Algorithm",
      ],
      answer: "Exploratory Data Analysis",
    },
    {
      question: "Which skill is important for a Data Analyst?",
      options: ["SQL", "Only HTML", "Only CSS", "Game Design"],
      answer: "SQL",
    },
    {
      question: "What is data visualization?",
      options: [
        "Representing data using charts or graphs",
        "Deleting data",
        "Encrypting passwords",
        "Writing software only",
      ],
      answer: "Representing data using charts or graphs",
    },
  ],

  7: [
    {
      question: "What does LLM stand for?",
      options: [
        "Large Language Model",
        "Long Learning Machine",
        "Logical Language Method",
        "Large Logic Module",
      ],
      answer: "Large Language Model",
    },
    {
      question: "What is prompt engineering?",
      options: [
        "Designing effective instructions for AI models",
        "Building computer hardware",
        "Creating SQL tables",
        "Designing websites",
      ],
      answer: "Designing effective instructions for AI models",
    },
    {
      question: "Generative AI can generate what?",
      options: [
        "New content",
        "Only databases",
        "Only hardware",
        "Only passwords",
      ],
      answer: "New content",
    },
    {
      question: "Which is an example of generative AI output?",
      options: ["Text", "Only electricity", "RAM", "CPU"],
      answer: "Text",
    },
    {
      question: "What is an AI model trained on?",
      options: [
        "Data",
        "Only HTML",
        "Only CSS",
        "A keyboard",
      ],
      answer: "Data",
    },
  ],

  8: [
    {
      question: "What does cloud computing provide?",
      options: [
        "Computing resources over the internet",
        "Only local storage",
        "Only printed documents",
        "Only desktop software",
      ],
      answer: "Computing resources over the internet",
    },
    {
      question: "Which is a cloud service model?",
      options: ["IaaS", "HTML", "CSS", "SQL"],
      answer: "IaaS",
    },
    {
      question: "What is cloud storage?",
      options: [
        "Storing data on remote cloud infrastructure",
        "Saving data only on paper",
        "Deleting data",
        "Printing files",
      ],
      answer: "Storing data on remote cloud infrastructure",
    },
    {
      question: "What is cloud deployment?",
      options: [
        "Making applications available through cloud infrastructure",
        "Writing on paper",
        "Formatting a document",
        "Creating a spreadsheet",
      ],
      answer: "Making applications available through cloud infrastructure",
    },
    {
      question: "Which is commonly associated with cloud computing?",
      options: [
        "Scalability",
        "Paper storage",
        "Manual calculation",
        "Offline-only systems",
      ],
      answer: "Scalability",
    },
  ],

  9: [
    {
      question: "What is cybersecurity?",
      options: [
        "Protection of systems and data",
        "Creating presentations",
        "Editing images",
        "Writing HTML",
      ],
      answer: "Protection of systems and data",
    },
    {
      question: "What is authentication?",
      options: [
        "Verifying a user's identity",
        "Deleting a database",
        "Creating a chart",
        "Compressing an image",
      ],
      answer: "Verifying a user's identity",
    },
    {
      question: "What is a vulnerability?",
      options: [
        "A weakness that can be exploited",
        "A programming language",
        "A database table",
        "A type of chart",
      ],
      answer: "A weakness that can be exploited",
    },
    {
      question: "Which is a security practice?",
      options: [
        "Using strong passwords",
        "Sharing passwords publicly",
        "Ignoring updates",
        "Disabling security",
      ],
      answer: "Using strong passwords",
    },
    {
      question: "What does network security protect?",
      options: [
        "Networks and their resources",
        "Only images",
        "Only spreadsheets",
        "Only presentations",
      ],
      answer: "Networks and their resources",
    },
  ],

  10: [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["def", "function", "fun", "define"],
      answer: "def",
    },
    {
      question: "Which data type stores True or False?",
      options: ["Boolean", "String", "List", "Tuple"],
      answer: "Boolean",
    },
    {
      question: "Which symbol is used for a comment in Python?",
      options: ["#", "//", "<!--", "/*"],
      answer: "#",
    },
    {
      question: "Which collection stores key-value pairs?",
      options: ["Dictionary", "List", "Tuple", "Set"],
      answer: "Dictionary",
    },
    {
      question: "Which function displays output in Python?",
      options: ["print()", "display()", "show()", "output()"],
      answer: "print()",
    },
  ],
};


function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  const questions = quizQuestions[id] || [];

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);


  /* =========================
     COURSE / QUIZ NOT FOUND
  ========================= */

  if (!course || questions.length === 0) {
    return (
      <div>

        <Navbar />

        <div className="quiz-not-found">

          <h1>
            Quiz Not Available
          </h1>

          <Link to="/courses">
            Back to Courses
          </Link>

        </div>

      </div>
    );
  }


  /* =========================
     SELECT ANSWER
  ========================= */

  const handleAnswer = (
    questionIndex,
    answer
  ) => {

    if (submitted) return;

    setAnswers({
      ...answers,
      [questionIndex]: answer,
    });
  };


  /* =========================
     SUBMIT QUIZ
  ========================= */

  const submitQuiz = () => {

    /* =========================
       CHECK CURRENT STUDENT
    ========================= */

    const currentStudent = JSON.parse(
      localStorage.getItem(
        "coursehub_current_student"
      )
    );

    if (!currentStudent) {

      alert(
        "Please login before attending the quiz."
      );

      navigate("/login");

      return;
    }


    /* =========================
       CALCULATE SCORE
    ========================= */

    let correctAnswers = 0;

    questions.forEach(
      (question, index) => {

        if (
          answers[index] ===
          question.answer
        ) {
          correctAnswers++;
        }

      }
    );


    const calculatedScore =
      Math.round(
        (correctAnswers /
          questions.length) *
          100
      );


    setScore(
      calculatedScore
    );

    setSubmitted(true);


    /* =========================
       GET ALL STUDENTS
    ========================= */

    const students =
      JSON.parse(
        localStorage.getItem(
          "coursehub_students"
        )
      ) || [];


    /* =========================
       FIND CURRENT STUDENT
    ========================= */

    const studentIndex =
      students.findIndex(
        (student) =>
          student.id ===
          currentStudent.id
      );


    if (studentIndex === -1) {

      alert(
        "Student account not found. Please login again."
      );

      return;
    }


    /* =========================
       GET STUDENT COURSES
    ========================= */

    const studentCourses =
      students[studentIndex]
        .enrolledCourses || [];


    /* =========================
       UPDATE QUIZ RESULT
    ========================= */

    const updatedCourses =
      studentCourses.map(
        (item) => {

          if (
            item.id === course.id
          ) {

            return {
              ...item,

              quizScore:
                calculatedScore,

              quizPassed:
                calculatedScore >= 70,

              completed:
                calculatedScore >= 70,
            };

          }

          return item;
        }
      );


    /* =========================
       UPDATE STUDENT
    ========================= */

    const updatedStudent = {
      ...students[studentIndex],

      enrolledCourses:
        updatedCourses,
    };


    students[studentIndex] =
      updatedStudent;


    /* =========================
       SAVE ALL DATA
    ========================= */

    localStorage.setItem(
      "coursehub_students",
      JSON.stringify(students)
    );

    localStorage.setItem(
      "coursehub_current_student",
      JSON.stringify(
        updatedStudent
      )
    );
  };


  /* =========================
     RETAKE QUIZ
  ========================= */

  const retakeQuiz = () => {

    setAnswers({});

    setSubmitted(false);

    setScore(0);
  };


  const passed =
    score >= 70;


  return (
    <div className="quiz-page">

      <Navbar />


      <div className="quiz-container">


        {/* =========================
            QUIZ HEADER
        ========================= */}

        <div className="quiz-header">

          <span className="course-category">
            {course.category}
          </span>

          <h1>
            {course.title} - Final Quiz
          </h1>

          <p>
            Answer all questions and submit
            the quiz.
          </p>

          <div className="pass-mark">
            Pass Mark:{" "}
            <strong>
              70%
            </strong>
          </div>

        </div>


        {/* =========================
            QUESTIONS
        ========================= */}

        {!submitted ? (

          <>

            {questions.map(
              (
                question,
                questionIndex
              ) => (

                <div
                  className="quiz-question-card"
                  key={questionIndex}
                >

                  <h2>
                    {questionIndex + 1}.{" "}
                    {question.question}
                  </h2>


                  <div className="quiz-options">

                    {question.options.map(
                      (
                        option,
                        optionIndex
                      ) => (

                        <label
                          className={`quiz-option ${
                            answers[
                              questionIndex
                            ] === option
                              ? "selected"
                              : ""
                          }`}
                          key={optionIndex}
                        >

                          <input
                            type="radio"
                            name={`question-${questionIndex}`}
                            checked={
                              answers[
                                questionIndex
                              ] === option
                            }
                            onChange={() =>
                              handleAnswer(
                                questionIndex,
                                option
                              )
                            }
                          />

                          <span>
                            {option}
                          </span>

                        </label>

                      )
                    )}

                  </div>

                </div>

              )
            )}


            {/* SUBMIT */}

            <button
              className="submit-quiz-btn"
              onClick={
                submitQuiz
              }
              disabled={
                Object.keys(
                  answers
                ).length !==
                questions.length
              }
            >
              Submit Quiz
            </button>

          </>

        ) : (

          /* =========================
             QUIZ RESULT
          ========================= */

          <div className="quiz-result">

            <div className="result-icon">

              {passed
                ? "🏆"
                : "📚"}

            </div>


            <h2>

              {passed
                ? "Congratulations!"
                : "Keep Learning!"}

            </h2>


            <p className="score-text">
              Your Score
            </p>


            <div className="score-number">
              {score}%
            </div>


            {passed ? (

              <>

                <p>
                  You passed the final quiz.
                  Your certificate is now
                  available.
                </p>


                <button
                  className="certificate-btn"
                  onClick={() =>
                    navigate(
                      `/certificate/${course.id}`
                    )
                  }
                >
                  View Certificate
                </button>

              </>

            ) : (

              <>

                <p>
                  You need at least 70% to
                  pass. Review the course
                  materials and try the quiz
                  again.
                </p>


                <button
                  className="retake-btn"
                  onClick={
                    retakeQuiz
                  }
                >
                  Retake Quiz
                </button>

              </>

            )}

          </div>

        )}

      </div>

    </div>
  );
}

export default Quiz;