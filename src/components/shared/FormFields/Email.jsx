import React from 'react';
import { useField } from 'utils/customHooks/useField';
import style from './styles/FormFields.scss';

export const Email = ({type}) => {
    const [ handleFieldChange, handleFieldValidate, value, error ] = useField(type, 'Email');
    return (
        <div class={style.fieldWrapper}>
            <input 
                placeholder="Email address"
                onChange={handleFieldChange}
                value={value}
                onBlur={handleFieldValidate}
                type="email"
                class={style.field}
            />
            <div class={style.errorMessage}>{error}</div>
        </div>
    );
}

export const LoginEmailField = () => <Email type="login" />
export const RegisterEmailField = () => <Email type="register" />;
