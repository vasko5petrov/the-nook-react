import React from 'react';
import LoginForm from 'components/partials/PreLoginForms/LoginForm';
import style from './styles/View.scss';

const Login = () => (
    <div class={style.container}>
        <LoginForm />
    </div>
);

export default Login;
