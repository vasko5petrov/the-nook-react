import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/PreLoginButtons.scss';

const PreLoginButtons = () => (
    <div className={style.container}>
        <Link to="/login" className={style.loginButton}>Login</Link>
        <Link to="/signup" className={style.registerButton}>Sign Up</Link>
    </div>
);

export default PreLoginButtons;