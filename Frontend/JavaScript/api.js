// ================= API / DATA MODULE =================

const STORAGE_KEYS = {
    students: "students",
    enrollments: "enrollments",
    courses: "courses",
    users: "users"
};


// Initialize application data
export function initializeStorage() {

    if (localStorage.getItem(STORAGE_KEYS.students) === null) {
        localStorage.setItem(STORAGE_KEYS.students, "0");
    }

    if (localStorage.getItem(STORAGE_KEYS.enrollments) === null) {
        localStorage.setItem(STORAGE_KEYS.enrollments, "0");
    }

    if (localStorage.getItem(STORAGE_KEYS.courses) === null) {
        localStorage.setItem(STORAGE_KEYS.courses, JSON.stringify([]));
    }

    if (localStorage.getItem(STORAGE_KEYS.users) === null) {
        localStorage.setItem(STORAGE_KEYS.users, JSON.stringify([]));
    }
}


// Generic storage functions
export function getData(key, defaultValue = null) {

    const value = localStorage.getItem(key);

    if (value === null) {
        return defaultValue;
    }

    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}


export function setData(key, value) {

    if (typeof value === "object") {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.setItem(key, value);
    }
}


export function removeData(key) {

    localStorage.removeItem(key);

}


// ================= USERS =================

export function getUsers() {

    return getData(STORAGE_KEYS.users, []);

}


export function saveUser(user) {

    const users = getUsers();

    users.push(user);

    setData(STORAGE_KEYS.users, users);

}


// ================= COURSES =================

export function getCourses() {

    return getData(STORAGE_KEYS.courses, []);

}


export function saveCourses(courses) {

    setData(STORAGE_KEYS.courses, courses);

}


export function addCourseData(course) {

    const courses = getCourses();

    courses.push(course);

    saveCourses(courses);

}


// ================= COUNTERS =================

export function getStudentCount() {

    return Number(
        localStorage.getItem(STORAGE_KEYS.students)
    ) || 0;

}


export function increaseStudentCount() {

    const count = getStudentCount() + 1;

    localStorage.setItem(
        STORAGE_KEYS.students,
        count
    );

    return count;

}


export function getEnrollmentCount() {

    return Number(
        localStorage.getItem(STORAGE_KEYS.enrollments)
    ) || 0;

}


export function increaseEnrollmentCount() {

    const count = getEnrollmentCount() + 1;

    localStorage.setItem(
        STORAGE_KEYS.enrollments,
        count
    );

    return count;

}