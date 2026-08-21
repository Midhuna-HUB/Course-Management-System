// ================= VALIDATION MODULE =================


export function validateRequired(fields) {

    for (const field of fields) {

        if (!field || field.trim() === "") {

            return false;

        }

    }

    return true;

}


export function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


export function validatePasswordMatch(
    password,
    confirmPassword
) {

    return password === confirmPassword;

}


export function validateRegistration(
    name,
    email,
    username,
    password,
    confirmPassword
) {

    if (
        !validateRequired([
            name,
            email,
            username,
            password,
            confirmPassword
        ])
    ) {

        return {
            valid: false,
            message: "Please fill all fields"
        };

    }


    if (!validateEmail(email)) {

        return {
            valid: false,
            message: "Please enter a valid email"
        };

    }


    if (
        !validatePasswordMatch(
            password,
            confirmPassword
        )
    ) {

        return {
            valid: false,
            message: "Passwords do not match"
        };

    }


    return {
        valid: true,
        message: "Valid"
    };

}