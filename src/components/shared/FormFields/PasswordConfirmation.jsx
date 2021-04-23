import React from 'react';
import { useField } from 'utils/customHooks/useField';
import style from './styles/FormFields.scss';

export const PasswordConfirmation = ({type}) => {
    const [ handleFieldChange, handleFieldValidate, value, error ] = useField(type, 'PasswordConfirmation');
    return (
        <div class={style.fieldWrapper}>
            <input 
                placeholder="Confirm password"
                onChange={handleFieldChange}
                value={value}
                onBlur={handleFieldValidate}
                type="password"
                class={style.field}
            />
            <div class={style.errorMessage}>{error}</div>
        </div>
    )
}

export const RegisterPasswordConfirmationField = () => <PasswordConfirmation type="register" />;