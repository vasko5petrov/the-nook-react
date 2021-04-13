import React from 'react';
import registerFormField from 'components/partials/RegisterForm/Fields/registerFormField';
import style from '../styles/RegisterFormFields.scss';

@registerFormField({field: 'PasswordConfirmation'})
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

export default PasswordConfirmation;