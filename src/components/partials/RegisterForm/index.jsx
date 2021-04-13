import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import validate from 'utils/validations/registerForm';
import hasErrors from 'utils/helpers/hasErrors';
import { REGISTER_PAGE_FIELDS } from 'utils/enums/constants';
import Fields from 'components/partials/RegisterForm/Fields';
import * as registerActions from 'store/modules/registerForm';
import style from './styles/RegisterForm.scss';

const allRegisterFields = REGISTER_PAGE_FIELDS.toList().flatten(true);

@withRouter
@connect((store) => ({
    form: store.registerForm
}))
class RegisterForm extends React.Component {

    componentWillUnmount() {
        this.props.dispatch(registerActions.reset());
    }

    handleRegister = async (e) => {
        e.preventDefault();
        const { dispatch, form, history } = this.props;
        const errors = validate(form.get('values'));
        if (!hasErrors(allRegisterFields, errors) && !hasErrors(allRegisterFields, form.get('serverErrors'))) {
            const data = await dispatch(registerActions.register(form.get('values')));
            
            if(!data.value.data.HasErrors) {
                history.push('/');
            }
        } else {
            dispatch(registerActions.updateErrors(errors));
        }
    }
    render () {
        return (
            <div class={style.container}>
                <p class={style.title}>Sign Up</p>
                <form onSubmit={this.handleRegister} class={style.formContainer}>
                    <div class={style.fieldsContainer}>
                        {REGISTER_PAGE_FIELDS.map((field) => {
                            const FieldComponent = Fields[field];

                            return <FieldComponent key={field} />;
                        })}
                        <button type="submit" class={style.registerButton}>Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterForm;