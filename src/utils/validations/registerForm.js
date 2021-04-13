import { Map } from 'immutable';
import { validate, required, equalTo } from './validationUtils';

export default (form) => Map({
    Password: validate(form.get('Password'), [
        [required, 'Password is required']
    ]),
    PasswordConfirmation: validate(form.get('PasswordConfirmation'), [
        [required, 'Password confirmation is required'],
        [equalTo(form.get('Password')), 'Passwords must match']
    ]),
    Email: validate(form.get('Email'), [
        [required, 'Email is required']
    ]),
    FirstName: validate(form.get('FirstName'), [
        [required, 'First name is required']
    ]),
    LastName: validate(form.get('LastName'), [
        [required, 'Last name is required']
    ])
});