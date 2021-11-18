import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import NavMenuItem from './NavMenuItem';
import { navItems } from 'utils/enums/constants';
import * as actions from 'store/actions/ui';
import style from './styles/Nav.scss';

const NavMenu = () => {
    const mobileNavExpanded = useSelector((store) => store.ui.get('mobileNavExpanded'));
    const profile = useSelector((store) => store.user.get('profile'));
    const dispatch = useDispatch();

    const toggleNavMenu = () => {
        dispatch(actions.toggleMobileNav());
    }
    const navMenuStyles = classnames(style.navMenu, {[style.displayMobileNav]: mobileNavExpanded});

    return (
        <React.Fragment>
            <ul className={navMenuStyles}>
                {navItems.map((navItem) => {
                    return <NavMenuItem {...navItem} profile={!!profile} key={navItem.path} />;
                })}
            </ul>
            <button className={style.mobileNavToggleBtn} onClick={() => toggleNavMenu()}>=</button>
        </React.Fragment>
    );
};

export default NavMenu;
