import { Map } from 'immutable';
import { validate, required, minlenght, equalTo, pattern, containsUppercase, containsDigit } from './validationUtils';
import { validFreeText, validEmail } from './xssValidations';

const invalidPassword = (x) => containsUppercase(x) && containsDigit(x);

export default (fields) => Map({
    firstName: validate(fields.get('firstName'), [
        [required, 'First name is required'],
        [pattern(validFreeText.pattern), validFreeText.message]
    ]),
    lastName: validate(fields.get('lastName'), [
        [required, 'Last name is required'],
        [pattern(validFreeText.pattern), validFreeText.message]
    ]),
    email: validate(fields.get('email'), [
        [required, 'Email is required'],
        [pattern(validEmail.pattern), validEmail.message]
    ]),
    password: validate(fields.get('password'), [
        [required, 'Password is required'],
        [minlenght(8), 'Password should be at least 8 characters long'],
        [invalidPassword, 'Password must contain at least one uppercase letter and number']
    ]),
    passwordConfirmation: validate(fields.get('passwordConfirmation'), [
        [required, 'Password confirmation is required'],
        [equalTo(fields.get('Password')), 'Passwords must match']
    ])
});