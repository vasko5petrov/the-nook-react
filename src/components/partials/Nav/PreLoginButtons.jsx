import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './styles/PreLoginButtons.scss';

const PreLoginButtons = () => (
    <div class={style.container}>
        <Link to="/login" className={style.loginButton}>Sign In</Link>
        <Link to="/signup" className={style.registerButton}>Sign Up</Link>
    </div>
);

export default withRouter(PreLoginButtons);