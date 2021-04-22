import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import classnames from 'classnames';
import * as actions from 'store/actions/ui';
import style from './styles/Nav.scss';

const NavMenuItem = ({ location, path, title, protectedRoute, profile }) => {
    const mobileNavExpanded = useSelector((store) => store.ui.get('mobileNavExpanded'));
    const dispatch = useDispatch();

    const navMenuItemStyles = classnames(style.navMenuItem, {[style.active]: location.pathname === path});

    if (protectedRoute && !profile) return null;

    const hideMobileNav = () => mobileNavExpanded && dispatch(actions.toggleMobileNav());

    return (
        <li class={navMenuItemStyles}>
            <Link to={path} onClick={hideMobileNav}>{title}</Link>
        </li>
    );
};

export default withRouter(NavMenuItem);
