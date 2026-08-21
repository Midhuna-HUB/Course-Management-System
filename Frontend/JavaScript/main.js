// ================= MAIN APPLICATION =================

import {
    initializeStorage,
    getCourses,
    addCourseData,
    increaseEnrollmentCount,
    getEnrollmentCount,
    getStudentCount
} from "./api.js";

import {
    registerUser,
    loginUser,
    logoutUser,
    restoreLoginState,
    resetUserPassword
} from "./auth.js";

import {
    setSelectedCourse,
    getSelectedCourse,
    getCurrentUser
} from "./state.js";

import {
    showMessage,
    getInputValue,
    setText,
    redirect,
    showPassword,
    renderCourses
} from "./ui.js";

import {
    validateRequired
} from "./validation.js";


// ================= INITIALIZATION =================

initializeStorage();

restoreLoginState();


// ================= LOGIN =================

function login() {

    const username =
        getInputValue("username");

    const password =
        getInputValue("password");


    const result =
        loginUser(
            username,
            password
        );


    if (!result.success) {

        showMessage(result.message);

        return;

    }


    showMessage(
        result.role === "admin"
            ? "Admin Login Successful"
            : "Login Successful"
    );


    redirect(
        result.role === "admin"
            ? "admin-dashboard.html"
            : "dashboard.html"
    );

}


// ================= REGISTER =================

function register() {

    const name =
        getInputValue("name");

    const email =
        getInputValue("email");

    const username =
        getInputValue("username");

    const password =
        getInputValue("password");

    const confirmPassword =
        getInputValue("confirmPassword");


    const result =
        registerUser(
            name,
            email,
            username,
            password,
            confirmPassword
        );


    showMessage(result.message);


    if (result.success) {

        redirect("login.html");

    }

}


// ================= LOGOUT =================

function logout() {

    logoutUser();

    showMessage("Logged Out");

    redirect("login.html");

}


// ================= FORGOT PASSWORD =================

function forgotPassword() {

    const email =
        getInputValue("email");


    const savedEmail =
        localStorage.getItem("email");


    if (!email) {

        showMessage(
            "Please enter email"
        );

        return;

    }


    if (email === savedEmail) {

        showMessage(
            "Reset link sent successfully"
        );

        redirect(
            "reset-password.html"
        );

    } else {

        showMessage(
            "Email not found"
        );

    }

}


// ================= RESET PASSWORD =================

function resetPassword() {

    const newPassword =
        getInputValue("newPassword");

    const confirmPassword =
        getInputValue("confirmPassword");


    const result =
        resetUserPassword(
            newPassword,
            confirmPassword
        );


    showMessage(result.message);


    if (result.success) {

        redirect("login.html");

    }

}


// ================= ENROLL COURSE =================

function enrollCourse() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const courseName =
        params.get("course");


    if (courseName) {

        setSelectedCourse(
            courseName
        );

    }


    increaseEnrollmentCount();


    showMessage(
        "Course Enrolled Successfully!"
    );


    redirect(
        "enrollment-success.html"
    );

}


// ================= ADD COURSE =================

function addCourse() {

    const courseName =
        getInputValue("courseName");

    const category =
        getInputValue("category");

    const description =
        getInputValue("description");

    const duration =
        getInputValue("duration");

    const instructor =
        getInputValue("instructor");


    if (
        !validateRequired([
            courseName,
            description,
            duration,
            instructor
        ]) ||
        category === "Select Category"
    ) {

        showMessage(
            "Please fill all fields"
        );

        return;

    }


    const course = {

        name: courseName,

        category: category,

        description: description,

        duration: duration,

        instructor: instructor

    };


    addCourseData(course);


    showMessage(
        "Course Added Successfully"
    );


    redirect("courses.html");

}


// ================= UPDATE COURSE =================

function updateCourse() {

    const courseName =
        getInputValue(
            "editCourseName"
        );


    if (!courseName) {

        showMessage(
            "Please enter course name"
        );

        return;

    }


    localStorage.setItem(
        "courseName",
        courseName
    );


    showMessage(
        "Course Updated Successfully"
    );


    redirect(
        "admin-dashboard.html"
    );

}


// ================= DASHBOARD =================

function loadDashboard() {

    const user =
        getCurrentUser();


    if (user) {

        setText(
            "welcomeHeading",
            `👋 Welcome ${user.name}`
        );

    }


    setText(
        "enrolledCourses",
        getEnrollmentCount()
    );

}


// ================= ADMIN DASHBOARD =================

function loadAdminDashboard() {

    setText(
        "students",
        getStudentCount()
    );


    setText(
        "enrollments",
        getEnrollmentCount()
    );


    const courses =
        getCourses();


    setText(
        "totalCourses",
        courses.length
    );


    renderCourses(
        courses,
        "courseTable"
    );

}


// ================= COURSE DETAILS =================

function loadCourseDetails() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const course =
        params.get("course");


    if (course) {

        setSelectedCourse(course);

        setText(
            "courseTitle",
            `📘 ${course}`
        );

    }

}


// ================= PAGE INITIALIZATION =================

function initializePage() {

    const title =
        document.title;


    if (
        title ===
        "Dashboard | CourseHub"
    ) {

        loadDashboard();

    }


    if (
        title ===
        "Admin Dashboard | CourseHub"
    ) {

        loadAdminDashboard();

    }


    if (
        title ===
        "Course Details | CourseHub"
    ) {

        loadCourseDetails();

    }


    if (
        title ===
        "Login | CourseHub"
    ) {

        showPassword(
            "password",
            "showPassword"
        );

    }

}


// Run page initialization
initializePage();


// ================= GLOBAL BRIDGE =================
// Allows existing HTML onclick="" attributes
// to continue working while the actual
// functionality remains inside ES6 modules.

window.login = login;

window.register = register;

window.logout = logout;

window.forgotPassword =
    forgotPassword;

window.resetPassword =
    resetPassword;

window.enrollCourse =
    enrollCourse;

window.addCourse =
    addCourse;

window.updateCourse =
    updateCourse;