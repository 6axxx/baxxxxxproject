# Form Validation Helpers

Form Validation Helpers is a lightweight JavaScript library that provides simple functions for validating common form fields.

## Installation

You can install the Form Validation Helpers package via npm:

```bash
npm install form-validation-helpers
```

## Usage

To use the validation functions in your project, import them as needed:

```javascript
const {
    validateEmail,
    validatePassword,
    validateRequired
} = require('form-validation-helpers');
```

### Validation Functions

#### `validateEmail(email)`

Checks if the provided email address is in a valid format.

```javascript
const isValidEmail = validateEmail('example@email.com');
```

#### `validatePassword(password)`

Checks if the provided password is at least 8 characters long.

```javascript
const isValidPassword = validatePassword('password123');
```

#### `validateRequired(input)`

Checks if a required field is not empty.

```javascript
const isRequiredFieldValid = validateRequired('example');
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
#   b a x x x x x p r o j e c t  
 