import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from 'components/shared/Spinner';
import Fields from 'components/shared/FormFields/registerFormFields';
import validate from 'utils/validations/registerForm';
import hasErrors from 'utils/helpers/hasErrors';
import { REGISTER_FIELDS } from 'utils/enums/constants';
import * as actions from 'store/modules/registerForm';
import * as userActions from 'store/actions/user';
import style from './styles/PreLoginForm.scss';

const RegisterForm = () => {
    const form = useSelector((store) => store.registerForm);
    const [successStatus, setStatus] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(actions.reset());
        }
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();
        const errors = validate(form.get('values'));
        if (!hasErrors(REGISTER_FIELDS, errors)) {
            const data = await dispatch(actions.register(form.get('values')));
            dispatch(userActions.getUser());
            if(data.value.data.message) {
                setStatus(true);
                dispatch(actions.reset());
            }
        } else {
            dispatch(actions.updateErrors(errors));
        }
    };

    return (
        <div class={style.container}>
            <p class={style.title}>Sign Up</p>
            <div onClick={() => setStatus(true)}>click</div>
            <form onSubmit={handleRegister} class={style.formContainer}>
                <div class={style.fieldsContainer}>
                    {REGISTER_FIELDS.map((field) => {
                        const FieldComponent = Fields[field];

                        return <FieldComponent key={field} />;
                    })}
                    <button type="submit" class={style.submitButton} disabled={form.get('loading')}>
                        {form.get('loading')? <Spinner color="white" /> : 'Sign up'}
                    </button>
                </div>
                {successStatus && <div class={style.successMessage}>Verification link was sent to your email. Link expires after 12 hours!</div>}
                {form.get('serverError') && <div class={style.serverErrorMessage}>{form.get('serverError')}</div>}
            </form>
            <p class={style.calloutText}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default RegisterForm;