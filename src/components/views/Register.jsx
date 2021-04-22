import React from 'react';
import RegisterForm from 'components/partials/PreLoginForms/RegisterForm';
import style from './styles/View.scss';

const Register = () => (
    <div class={style.container}>
        <RegisterForm />
    </div>
);

export default Register;
