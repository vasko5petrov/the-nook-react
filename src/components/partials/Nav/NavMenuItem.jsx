import React from 'react';
import classnames from 'classnames';
import { Link, withRouter } from 'react-router-dom';
import style from './styles/Nav.scss';

const NavMenuItem = ({ location, path, title }) => {
    const navMenuItemStyles = classnames(style.navMenuItem, {[style.active]: location.pathname === path});
    return (
        <li class={navMenuItemStyles}>
            <Link to={path}>{title}</Link>
        </li>
    );
};

export default withRouter(NavMenuItem);
