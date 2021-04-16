import { Map } from 'immutable';
import { validate, required, pattern, containsUppercase, containsDigit } from './validationUtils';
import { validEmail } from './xssValidations';

const invalidPassword = (x) => containsUppercase(x) && containsDigit(x);

export default (fields) => Map({
    Email: validate(fields.get('Email'), [
        [required, 'Email is required'],
        [pattern(validEmail.pattern), validEmail.message]
    ]),
    Password: validate(fields.get('Password'), [
        [required, 'Password is required']
    ]),
});