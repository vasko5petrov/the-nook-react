import { Map } from 'immutable';
import { validate, required, pattern, containsUppercase, containsDigit } from './validationUtils';
import { validEmail } from './xssValidations';

const invalidPassword = (x) => containsUppercase(x) && containsDigit(x);

export default (fields) => Map({
    email: validate(fields.get('email'), [
        [required, 'Email is required'],
        [pattern(validEmail.pattern), validEmail.message]
    ]),
    password: validate(fields.get('password'), [
        [required, 'Password is required']
    ]),
});