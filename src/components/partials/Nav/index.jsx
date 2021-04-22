import React from 'react';
import { useSelector } from 'react-redux';
import NavMenu from './NavMenu';
import PreLoginButtons from './PreLoginButtons';
import UserMenu from './UserMenu';
import style from './styles/Nav.scss';

const Nav = () => {
    const profile = useSelector((store) => store.user.get('profile'));
    return (
        <nav class={style.navContainer}>
            <NavMenu />
            {!profile ? <PreLoginButtons /> : <UserMenu />}
        </nav>
    );
};

export default Nav;
