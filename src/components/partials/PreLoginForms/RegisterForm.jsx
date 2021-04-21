import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Spinner from 'components/shared/Spinner';
import Fields from 'components/shared/FormFields/registerFormFields';
import validate from 'utils/validations/registerForm';
import hasErrors from 'utils/helpers/hasErrors';
import { REGISTER_FIELDS } from 'utils/enums/constants';
import * as registerActions from 'store/modules/registerForm';
import * as userActions from 'store/actions/user';
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
        const errors = validate(form.get('values'));
        if (!hasErrors(REGISTER_FIELDS, errors)) {
            const data = await dispatch(registerActions.register(form.get('values')));
            dispatch(userActions.getUser());
            if(data.value.data.message) {
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
                    <button type="submit" class={style.submitButton} disabled={form.get('loading')}>
                        {form.get('loading')? <Spinner color="white" /> : 'Sign up'}
                    </button>
                    {form.get('serverError') && <div class={style.serverErrorMessage}>{form.get('serverError')}</div>}
                </div>
            </form>
        </div>
    );
}

export default withRouter(connect(mapStateToProps)(RegisterForm));