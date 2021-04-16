import formField from 'components/decorators/formField';
import registerFormValidations from 'utils/validations/registerForm';
import loginFormValidations from 'utils/validations/loginForm';
import * as registerActions from 'store/modules/registerForm';
import * as loginActions from 'store/modules/loginForm';

export const registerFormField = ({ field }) => formField({
    form: 'registerForm',
    formActions: registerActions,
    validate: registerFormValidations,
    field 
});

export const loginFormField = ({ field }) => formField({
    form: 'loginForm',
    formActions: loginActions,
    validate: loginFormValidations,
    field
});