import React from 'react';
import { registerFormField } from 'components/shared/FormFields/formFields';
import style from './styles/FormFields.scss';

class PasswordConfirmation extends React.Component {
    render() {
        const { value, error } = this.props;

        return (
            <div class={style.fieldWrapper}>
                <input 
                    placeholder="Confirm password"
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

export const RegisterPasswordConfirmationField = registerFormField({field: 'PasswordConfirmation'})(PasswordConfirmation);