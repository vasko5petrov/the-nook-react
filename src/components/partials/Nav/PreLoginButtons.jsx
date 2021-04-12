import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './styles/PreLoginButtons.scss';

const PreLoginButtons = () => (
    <div class={style.container}>
        <Link to="/login" class={style.loginButton}>Log In</Link>
        <Link to="/register" class={style.registerButton}>Sign Up</Link>
    </div>
);

export default withRouter(PreLoginButtons);