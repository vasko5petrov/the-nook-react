import React from 'react';
import { loginFormField, registerFormField } from 'components/shared/FormFields/formFields';
import style from './styles/FormFields.scss';

class Email extends React.Component {
    render() {
        const { value, error } = this.props;

        return (
            <div class={style.fieldWrapper}>
                <input 
                    placeholder="Email address"
                    onChange={this.handleFieldChange}
                    value={value}
                    onBlur={this.handleFieldValidate}
                    type="text"
                    class={style.field}
                />
                <div class={style.errorMessage}>{error}</div>
            </div>
        );
    }
}

export const LoginEmailField = loginFormField({field: 'Email'})(Email);
export const RegisterEmailField = registerFormField({field: 'Email'})(Email);