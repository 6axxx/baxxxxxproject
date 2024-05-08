// form-validation-helpers.js

// Function to validate email addresses
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate passwords (at least 8 characters long)
function validatePassword(password) {
    return password.length >= 8;
}

// Function to validate a required field (not empty)
function validateRequired(input) {
    return input.trim() !== '';
}

// Exporting the validation functions
module.exports = {
    validateEmail,
    validatePassword,
    validateRequired
};
