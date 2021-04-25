import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Spinner from 'components/shared/Spinner';
import Fields from 'components/shared/FormFields/loginFormFields';
import validate from 'utils/validations/loginForm';
import hasErrors from 'utils/helpers/hasErrors';
import { LOGIN_FIELDS } from 'utils/enums/constants';
import * as actions from 'store/modules/loginForm';
import * as userActions from 'store/actions/user';
import style from './styles/PreLoginForm.scss';

const LoginForm = () => {
    const form = useSelector((store) => store.loginForm);
    const dispatch = useDispatch();
    const { prevLocation } = useLocation();
    const history = useHistory()

    useEffect(() => {
        return () => {
            dispatch(actions.reset());
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const errors = validate(form.get('values'));
        if (!hasErrors(LOGIN_FIELDS, errors)) {
            const data = await dispatch(actions.login(form.get('values')));
            await dispatch(userActions.getUser());
            if(data.value.data.message) {
                history.push(prevLocation || '/');
            }
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
                    <button type="submit" class={style.submitButton} disabled={form.get('loading')}>
                        {form.get('loading')? <Spinner color="white" /> : 'Login'}
                    </button>
                    {form.get('serverError') && <div class={style.serverErrorMessage}>{form.get('serverError')}</div>}
                </div>
                <Link className={style.forgotPasswordLink} to="/forgot-password">Forgot Password?</Link>
            </form>
            <p class={style.calloutText}>Need an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
};

export default LoginForm;
