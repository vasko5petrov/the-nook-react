import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import Spinner from '../shared/Spinner';
import { Link } from 'react-router-dom';
import errorIcon from 'assets/icons/error.svg';
import successIcon from 'assets/icons/success.svg';
import * as userActions from 'store/actions/user';
import { isLoaded, isLoading, isRejected } from '../../utils/helpers/statusChecker';
import viewStyle from './styles/View.scss';
import style from './styles/VerifyEmail.scss';

const VerifyEmail = () => {
    const verifyEmailStatus = useSelector((store) => store.status.get('verifyEmail'));
    const user = useSelector((store) => store.user.get('profile'));
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const data = {
            id: searchParams.get('id'),
            token: searchParams.get('token'),
            expires: searchParams.get('expires'),
            signature: searchParams.get('signature'),
        };
        dispatch(userActions.verifyEmail(data));
    }, []);

    const resendVerifyLink = () => {
        console.log('resending verification link');
    }

    if (!verifyEmailStatus || verifyEmailStatus && isLoading(verifyEmailStatus.get('status'))) {
        return <Spinner />;
    }

    const hasInvalidLink = isRejected(verifyEmailStatus.get('status')) && verifyEmailStatus.get('message').toLowerCase().includes('invalid');

    if (isRejected(verifyEmailStatus.get('status')) || isLoaded(verifyEmailStatus.get('status'))) {
        return (
            <div class={viewStyle.container}>
                <div class={style.verificationInfo}>

                    {isRejected(verifyEmailStatus.get('status'))
                        ? <img src={errorIcon} alt="Error!" width="50" height="50" />
                        : <img src={successIcon} alt="Success!" width="50" height="50" />
                    }
    
                    <h3>{verifyEmailStatus.get('message')}</h3>

                    {hasInvalidLink &&
                        <p>Your verification link is invalid or has already expired. To receive new one <span onClick={resendVerifyLink} class={style.resendLink}>click here</span>.</p>
                    }

                    {isLoaded(verifyEmailStatus.get('status')) && !user &&
                        <p>You can <Link to="/login" className={style.loginLink}>log in</Link> to your account.</p>
                    }
                </div>
            </div>
        );
    }
};

export default VerifyEmail;
