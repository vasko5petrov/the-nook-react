import React from 'react';
import classnames from 'classnames';
import { useField } from 'utils/customHooks/useField';
import style from './styles/FormFields.scss';

export const Password = ({type}) => {
    const [ handleFieldChange, handleFieldValidate, value, error ] = useField(type, 'Password');
    const fieldStyle = classnames(style.field, {[style.hasError]: !!error});
    return (
        <div class={style.fieldWrapper}>
            <input 
                placeholder="Password"
                onChange={handleFieldChange}
                value={value}
                onBlur={handleFieldValidate}
                type="password"
                class={fieldStyle}
            />
            <div class={style.errorMessage}>{error}</div>
        </div>
    )
}

export const LoginPasswordField = () => <Password type="login" />
export const RegisterPasswordField = () => <Password type="register" />;