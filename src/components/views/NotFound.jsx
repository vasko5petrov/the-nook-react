import React from 'react';
import NavMenu from 'components/partials/Nav/NavMenu';
import style from './styles/View.scss';

const NotFound = () => {
    return (
        <div class={style.container}>
            <h3>404 Page Not Found!</h3>
            <NavMenu />         
        </div>
    );
};

export default NotFound;
