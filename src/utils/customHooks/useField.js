import { useSelector, useDispatch } from 'react-redux';
import registerFormValidations from 'utils/validations/registerForm';
import loginFormValidations from 'utils/validations/loginForm';
import * as registerActions from 'store/modules/registerForm';
import * as loginActions from 'store/modules/loginForm';

export const createField = ({ formName, fieldName, actions, validate }) => {
    const form = useSelector((store) => store[formName]);
    const value = useSelector((store) => store[formName].getIn(['values', fieldName]));
    const error = useSelector((store) => store[formName].getIn(['clientErrors', fieldName]) || store[formName].getIn(['serverErrors', fieldName]));
    const dispatch = useDispatch();

    const handleFieldChange = (e) => {
        dispatch(actions.updateField({field: fieldName, value: e.target.value}));
    };

    const handleFieldValidate = () => {
        const errors = validate(form.get('values'));
        dispatch(actions.updateError({field: fieldName, value: errors.get(fieldName)}));
    };

    return [
        handleFieldChange,
        handleFieldValidate,
        value,
        error
    ];
};

export const registerField = (fieldName) => {
    return createField({formName: 'registerForm', fieldName, actions: registerActions, validate: registerFormValidations});
};


export const loginField = (fieldName) => {
    return createField({formName: 'loginForm', fieldName, actions: loginActions, validate: loginFormValidations});
};

export const useField = (type, fieldName) => {
    const hooks = {
        register: () => registerField(fieldName),
        login: () => loginField(fieldName)
    };
    return hooks[type]();
};