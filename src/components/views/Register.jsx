import React from 'react';
import RegisterForm from 'components/partials/PreLoginForms/RegisterForm';
import style from './styles/View.scss';

const Register = () => (
    <div className={style.container}>
        <RegisterForm />
    </div>
);

export default Register;
