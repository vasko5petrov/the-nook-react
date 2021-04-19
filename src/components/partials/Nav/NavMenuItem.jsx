import React from 'react';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import style from './styles/Nav.scss';

const NavMenuItem = ({ location, path, title, protectedRoute, profile }) => {
    const navMenuItemStyles = classnames(style.navMenuItem, {[style.active]: location.pathname === path});
    if (protectedRoute && !profile) return null;
    return (
        <li class={navMenuItemStyles}>
            <Link to={path}>{title}</Link>
        </li>
    );
};

export default withRouter(NavMenuItem);
