import React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import PreLoginButtons from './PreLoginButtons';
import UserMenu from './UserMenu';
import style from './styles/Nav.scss';

const mapStateToProps = (store) => ({
    profile: store.user.get('profile')
});

const Nav = ({profile}) => (
    <nav class={style.navContainer}>
        <NavMenu />
        {!profile ? <PreLoginButtons /> : <UserMenu />}
    </nav>
);

export default connect(mapStateToProps)(Nav);
