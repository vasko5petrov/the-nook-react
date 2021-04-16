import { Map } from 'immutable';
import { validate, required, minlenght, equalTo, pattern, containsUppercase, containsDigit } from './validationUtils';
import { validFreeText, validEmail } from './xssValidations';

const invalidPassword = (x) => containsUppercase(x) && containsDigit(x);

export default (fields) => Map({
    Email: validate(fields.get('Email'), [
        [required, 'Email is required'],
        [pattern(validEmail.pattern), validEmail.message]
    ]),
    'FirstName': validate(fields.get('FirstName'), [
        [required, 'First name is required'],
        [pattern(validFreeText.pattern), validFreeText.message]
    ]),
    'LastName': validate(fields.get('LastName'), [
        [required, 'Last name is required'],
        [pattern(validFreeText.pattern), validFreeText.message]
    ]),
    Password: validate(fields.get('Password'), [
        [required, 'Password is required'],
        [minlenght(8), 'Password should be at least 8 characters long'],
        [invalidPassword, 'Password must contain at least one uppercase letter and number']
    ]),
    'PasswordConfirmation': validate(fields.get('PasswordConfirmation'), [
        [required, 'Password confirmation is required'],
        [equalTo(fields.get('Password')), 'Passwords must match']
    ])
});