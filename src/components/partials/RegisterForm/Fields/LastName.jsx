import React from 'react';
import registerFormField from 'components/partials/RegisterForm/Fields/registerFormField';
import style from '../styles/RegisterFormFields.scss';

@registerFormField({field: 'LastName'})
class LastName extends React.Component {
    render() {
        const { value, error } = this.props;

        return (
            <div class={style.fieldWrapper}>
                <input 
                    placeholder="Last name"
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

export default LastName;