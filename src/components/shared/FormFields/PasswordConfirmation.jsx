import React from 'react';
import classnames from 'classnames';
import { useField } from 'utils/customHooks/useField';
import style from './styles/FormFields.scss';

export const PasswordConfirmation = ({type}) => {
    const [ handleFieldChange, handleFieldValidate, value, error ] = useField(type, 'passwordConfirmation');
    const fieldStyle = classnames(style.field, {[style.hasError]: !!error});
    return (
        <div className={style.fieldWrapper}>
            <input 
                placeholder="Confirm password"
                onChange={handleFieldChange}
                value={value}
                onBlur={handleFieldValidate}
                type="password"
                className={fieldStyle}
            />
            <div className={style.errorMessage}>{error}</div>
        </div>
    )
}

export const RegisterPasswordConfirmationField = () => <PasswordConfirmation type="register" />;