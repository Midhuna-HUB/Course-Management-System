// ================= APPLICATION STATE =================

const state = {

    currentUser: null,

    selectedCourse: null,

    isLoggedIn: false,

    role: null

};


// Get complete state
export function getState() {

    return { ...state };

}


// Set logged-in user
export function setCurrentUser(user, role) {

    state.currentUser = user;

    state.role = role;

    state.isLoggedIn = true;

}


// Clear login state
export function clearCurrentUser() {

    state.currentUser = null;

    state.role = null;

    state.isLoggedIn = false;

}


// Set selected course
export function setSelectedCourse(course) {

    state.selectedCourse = course;

}


// Get selected course
export function getSelectedCourse() {

    return state.selectedCourse;

}


// Check login status
export function isUserLoggedIn() {

    return state.isLoggedIn;

}


// Get current user
export function getCurrentUser() {

    return state.currentUser;

}