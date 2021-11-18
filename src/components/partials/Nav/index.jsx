import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavMenu from './NavMenu';
import PreLoginButtons from './PreLoginButtons';
import UserMenu from './UserMenu';
import * as uiActions from 'store/actions/ui';
import style from './styles/Nav.scss';

const Nav = () => {
    const profile = useSelector((store) => store.user.get('profile'));
    const darkMode = useSelector((state) => state.ui.get('darkMode'));
    const dispatch = useDispatch();
    const toggleTheme = () => dispatch(uiActions.setDarkMode(!darkMode));

    return (
        <nav className={style.navContainer}>
            <button className={style.darkModeToggleBtn} onClick={toggleTheme}>Toggle dark mode</button>
            <NavMenu />
            {!profile ? <PreLoginButtons /> : <UserMenu />}
        </nav>
    );
};

export default Nav;
