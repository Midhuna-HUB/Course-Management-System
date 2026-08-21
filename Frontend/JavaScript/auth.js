// ================= AUTHENTICATION MODULE =================

import {
    getUsers,
    saveUser,
    increaseStudentCount,
    getStudentCount
} from "./api.js";

import {
    setCurrentUser,
    clearCurrentUser
} from "./state.js";

import {
    validateRequired,
    validateRegistration
} from "./validation.js";


// ================= REGISTER =================

export function registerUser(
    name,
    email,
    username,
    password,
    confirmPassword
) {

    const validation =
        validateRegistration(
            name,
            email,
            username,
            password,
            confirmPassword
        );


    if (!validation.valid) {

        return {
            success: false,
            message: validation.message
        };

    }


    const users = getUsers();


    const existingUser =
        users.find(
            user =>
                user.username === username ||
                user.email === email
        );


    if (existingUser) {

        return {
            success: false,
            message: "Username or email already exists"
        };

    }


    const user = {

        name,
        email,
        username,
        password

    };


    saveUser(user);


    // Keep old storage values for compatibility
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);


    increaseStudentCount();


    return {
        success: true,
        message: "Registration Successful"
    };

}


// ================= LOGIN =================

export function loginUser(username, password) {

    if (
        !validateRequired([
            username,
            password
        ])
    ) {

        return {
            success: false,
            message: "Please fill all fields"
        };

    }


    // Admin
    if (
        username === "admin" &&
        password === "1234"
    ) {

        const admin = {
            username: "admin",
            name: "Administrator",
            role: "admin"
        };


        setCurrentUser(admin, "admin");


        localStorage.setItem(
            "login",
            "admin"
        );


        localStorage.setItem(
            "currentUser",
            JSON.stringify(admin)
        );


        return {
            success: true,
            role: "admin"
        };

    }


    // Check registered users
    const users = getUsers();


    let user =
        users.find(
            u =>
                (
                    u.username === username ||
                    u.email === username
                ) &&
                u.password === password
        );


    // Compatibility with your old single-user storage
    if (!user) {

        const savedUser =
            localStorage.getItem("username");

        const savedEmail =
            localStorage.getItem("email");

        const savedPassword =
            localStorage.getItem("password");

        const savedName =
            localStorage.getItem("name");


        if (
            (
                username === savedUser ||
                username === savedEmail
            ) &&
            password === savedPassword
        ) {

            user = {

                name: savedName,
                email: savedEmail,
                username: savedUser,
                password: savedPassword

            };

        }

    }


    if (!user) {

        return {
            success: false,
            message: "Invalid Username or Password"
        };

    }


    setCurrentUser(user, "student");


    localStorage.setItem(
        "login",
        "student"
    );


    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );


    return {
        success: true,
        role: "student"
    };

}


// ================= LOGOUT =================

export function logoutUser() {

    clearCurrentUser();

    localStorage.removeItem("login");

    localStorage.removeItem("currentUser");

}


// ================= CURRENT USER =================

export function restoreLoginState() {

    const login =
        localStorage.getItem("login");

    const storedUser =
        localStorage.getItem("currentUser");


    if (
        login &&
        storedUser
    ) {

        try {

            const user =
                JSON.parse(storedUser);

            setCurrentUser(
                user,
                login
            );

            return user;

        } catch {

            clearCurrentUser();

        }

    }


    return null;

}


// ================= PASSWORD RESET =================

export function resetUserPassword(
    newPassword,
    confirmPassword
) {

    if (
        !newPassword ||
        !confirmPassword
    ) {

        return {
            success: false,
            message: "Please fill all fields"
        };

    }


    if (
        newPassword !== confirmPassword
    ) {

        return {
            success: false,
            message: "Passwords do not match"
        };

    }


    const users = getUsers();


    const username =
        localStorage.getItem("username");


    const user =
        users.find(
            u => u.username === username
        );


    if (user) {

        user.password = newPassword;

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

    }


    // Compatibility
    localStorage.setItem(
        "password",
        newPassword
    );


    return {
        success: true,
        message: "Password Reset Successful"
    };

}