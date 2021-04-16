import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import validate from 'utils/validations/registerForm';
import hasErrors from 'utils/helpers/hasErrors';
import { REGISTER_FIELDS } from 'utils/enums/constants';
import Fields from 'components/shared/FormFields/registerFormFields';
import * as registerActions from 'store/modules/registerForm';
import style from './styles/PreLoginForm.scss';

const mapStateToProps = (store) => ({
    form: store.registerForm
});
const RegisterForm = ({ dispatch, form, history }) => {

    useEffect(() => {
        return () => {
            dispatch(registerActions.reset());
        }
    }, [])

    const handleRegister = async (e) => {
        e.preventDefault();
        const errors = validate(form.get('values'), 'registerForm');
        if (!hasErrors(REGISTER_FIELDS, errors) && !hasErrors(REGISTER_FIELDS, form.get('serverErrors'))) {
            const data = await dispatch(registerActions.register(form.get('values')));
            
            if(!data.value.data.HasErrors) {
                history.push('/');
            }
        } else {
            dispatch(registerActions.updateErrors(errors));
        }
    };

    return (
        <div class={style.container}>
            <p class={style.title}>Sign Up</p>
            <form onSubmit={handleRegister} class={style.formContainer}>
                <div class={style.fieldsContainer}>
                    {REGISTER_FIELDS.map((field) => {
                        const FieldComponent = Fields[field];

                        return <FieldComponent key={field} />;
                    })}
                    <button type="submit" class={style.submitButton}>Sign up</button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(connect(mapStateToProps)(RegisterForm));