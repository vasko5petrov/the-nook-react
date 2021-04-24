import React from 'react';
import classnames from 'classnames';
import { useField } from 'utils/customHooks/useField';
import style from './styles/FormFields.scss';

export const Email = ({type}) => {
    const [ handleFieldChange, handleFieldValidate, value, error ] = useField(type, 'Email');
    const fieldStyle = classnames(style.field, {[style.hasError]: !!error});
    return (
        <div class={style.fieldWrapper}>
            <input 
                placeholder="Email address"
                onChange={handleFieldChange}
                value={value}
                onBlur={handleFieldValidate}
                type="email"
                class={fieldStyle}
            />
            <div class={style.errorMessage}>{error}</div>
        </div>
    );
}

export const LoginEmailField = () => <Email type="login" />
export const RegisterEmailField = () => <Email type="register" />;
