import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Spinner from 'components/shared/Spinner';
import Fields from 'components/shared/FormFields/registerFormFields';
import validate from 'utils/validations/registerForm';
import hasErrors from 'utils/helpers/hasErrors';
import { REGISTER_FIELDS } from 'utils/enums/constants';
import * as actions from 'store/modules/registerForm';
import * as userActions from 'store/actions/user';
import * as uiActions from 'store/actions/ui';
import style from './styles/PreLoginForm.scss';

const RegisterForm = () => {
    const form = useSelector((store) => store.registerForm);
    const history = useHistory();
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
            await dispatch(userActions.getUser());
            if(data.value.data.message) {
                dispatch(uiActions.addNotification({
                    type: 'SUCCESS',
                    message: data.value.data.message
                }));
                dispatch(uiActions.addNotification({
                    type: 'INFO',
                    message: 'Verification link was sent to your email. Link expires after 12 hours!',
                    expiration: 16000
                }));
                history.push('/profile');
            }
        } else {
            dispatch(actions.updateErrors(errors));
        }
    };

    return (
        <div className={style.container}>
            <p className={style.title}>Sign Up</p>
            <form onSubmit={handleRegister} className={style.formContainer}>
                <div className={style.fieldsContainer}>
                    {REGISTER_FIELDS.map((field) => {
                        const FieldComponent = Fields[field];

                        return <FieldComponent key={field} />;
                    })}
                    <button type="submit" className={style.submitButton} disabled={form.get('loading')}>
                        {form.get('loading')? <Spinner color="white" /> : 'Sign up'}
                    </button>
                </div>
                {form.get('serverError') && <div className={style.serverErrorMessage}>{form.get('serverError')}</div>}
            </form>
            <p className={style.calloutText}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default RegisterForm;