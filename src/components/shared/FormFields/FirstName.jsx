import React from 'react';
import classnames from 'classnames';
import { useField } from 'utils/customHooks/useField';
import style from './styles/FormFields.scss';

export const FirstName = ({type}) => {
    const [ handleFieldChange, handleFieldValidate, value, error ] = useField(type, 'FirstName');
    const fieldStyle = classnames(style.field, {[style.hasError]: !!error});
    return (
        <div class={style.fieldWrapper}>
            <input 
                placeholder="First name"
                onChange={handleFieldChange}
                value={value}
                onBlur={handleFieldValidate}
                type="text"
                class={fieldStyle}
            />
            <div class={style.errorMessage}>{error}</div>
        </div>
    )
}

export const RegisterFirstNameField = () => <FirstName type="register" />;