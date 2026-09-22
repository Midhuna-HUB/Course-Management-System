import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import Courses from "./pages/Courses";
import BrowseCourses from "./pages/BrowseCourses";
import CourseDetail from "./pages/CourseDetail";
import Learning from "./pages/Learning";
import Notes from "./pages/Notes";
import VisualLearning from "./pages/VisualLearning";
import Resources from "./pages/Resources";
import Practice from "./pages/Practice";
import Quiz from "./pages/Quiz";
import Certificate from "./pages/Certificate";
import EnrollmentSuccess from "./pages/EnrollmentSuccess";

import Search from "./pages/Search";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddCourse from "./pages/AddCourse";
import EditCourse from "./pages/EditCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            STUDENT PAGES
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/my-courses"
          element={<MyCourses />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/browse-courses"
          element={<BrowseCourses />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        <Route
          path="/course/:id"
          element={<CourseDetail />}
        />

        <Route
          path="/learning/:id"
          element={<Learning />}
        />

        <Route
          path="/notes/:id"
          element={<Notes />}
        />

        <Route
          path="/visual-learning/:id"
          element={<VisualLearning />}
        />

        <Route
          path="/resources/:id"
          element={<Resources />}
        />

        <Route
          path="/practice/:id"
          element={<Practice />}
        />

        <Route
          path="/quiz/:id"
          element={<Quiz />}
        />

        <Route
          path="/certificate/:id"
          element={<Certificate />}
        />

        <Route
          path="/enrollment-success"
          element={<EnrollmentSuccess />}
        />

        {/* =========================
            ADMIN PAGES
        ========================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/add-course"
          element={<AddCourse />}
        />

        <Route
          path="/admin/edit-course/:id"
          element={<EditCourse />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;