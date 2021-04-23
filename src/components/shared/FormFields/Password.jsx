import React from 'react';
import { useField } from 'utils/customHooks/useField';
import style from './styles/FormFields.scss';

export const Password = ({type}) => {
    const [ handleFieldChange, handleFieldValidate, value, error ] = useField(type, 'Password');
    return (
        <div class={style.fieldWrapper}>
            <input 
                placeholder="Password"
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

export const LoginPasswordField = () => <Password type="login" />
export const RegisterPasswordField = () => <Password type="register" />;