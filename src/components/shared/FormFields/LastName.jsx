import React from 'react';
import { useField } from 'utils/customHooks/useField';
import style from './styles/FormFields.scss';

export const LastName = ({type}) => {
    const [ handleFieldChange, handleFieldValidate, value, error ] = useField(type, 'LastName');
    return (
        <div class={style.fieldWrapper}>
            <input 
                placeholder="Last name"
                onChange={handleFieldChange}
                value={value}
                onBlur={handleFieldValidate}
                type="text"
                class={style.field}
            />
            <div class={style.errorMessage}>{error}</div>
        </div>
    )
}

export const RegisterLastNameField = () => <LastName type="register" />;