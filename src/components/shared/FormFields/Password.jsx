import React from 'react';
import { loginFormField, registerFormField } from 'components/shared/FormFields/formFields';
import style from './styles/FormFields.scss';

class Password extends React.Component {
    render() {
        const { value, error } = this.props;

        return (
            <div class={style.fieldWrapper}>
                <input 
                    placeholder="Password"
                    onChange={this.handleFieldChange}
                    value={value}
                    onBlur={this.handleFieldValidate}
                    type="password"
                    class={style.field}
                />
                <div class={style.errorMessage}>{error}</div>
            </div>
        )
    }
}

export const LoginPasswordField = loginFormField({field: 'Password'})(Password);
export const RegisterPasswordField = registerFormField({field: 'Password'})(Password);