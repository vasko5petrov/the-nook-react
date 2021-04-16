import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import validate from 'utils/validations/loginForm';
import hasErrors from 'utils/helpers/hasErrors';
import { LOGIN_FIELDS } from 'utils/enums/constants';
import Fields from 'components/shared/FormFields/loginFormFields';
import * as actions from 'store/modules/loginForm';
import style from './styles/PreLoginForm.scss';

const mapStateToProps = (store) => ({
    form: store.loginForm
});

const LoginForm = ({ form, dispatch, history }) => {

    useEffect(() => {
        return () => {
            dispatch(actions.reset());
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const errors = validate(form.get('values'), 'loginForm');
        if (!hasErrors(LOGIN_FIELDS, errors) && !hasErrors(LOGIN_FIELDS, form.get('serverErrors'))) {       
            history.push('/');
            dispatch(actions.login(form.get('values')));
        } else {
            dispatch(actions.updateErrors(errors));
        }
    };

    return (
        <div class={style.container}>
            <p class={style.title}>Log In</p>
            <form onSubmit={handleLogin} class={style.formContainer}>
                <div class={style.fieldsContainer}>
                    {LOGIN_FIELDS.map((field) => {
                        const FieldComponent = Fields[field];

                        return <FieldComponent key={field} />;
                    })}
                    <button type="submit" class={style.submitButton}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default withRouter(connect(mapStateToProps)(LoginForm));
