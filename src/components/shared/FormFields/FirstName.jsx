import React from 'react';
import { registerFormField } from 'components/shared/FormFields/formFields';
import style from './styles/FormFields.scss';

class FirstName extends React.Component {
    render() {
        const { value, error } = this.props;

        return (
            <div class={style.fieldWrapper}>
                <input 
                    placeholder="First name"
                    onChange={this.handleFieldChange}
                    value={value}
                    onBlur={this.handleFieldValidate}
                    type="text"
                    class={style.field}
                />
                <div class={style.errorMessage}>{error}</div>
            </div>
        )
    }
}

export const RegisterFirstNameField = registerFormField({field: 'FirstName'})(FirstName);