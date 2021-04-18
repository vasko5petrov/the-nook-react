import React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import PreLoginButtons from './PreLoginButtons';
import UserMenu from './UserMenu';
import style from './styles/Nav.scss';

const mapStateToProps = (store) => ({
    account: store.user.get('account')
});

const Nav = ({account}) => (
    <nav class={style.navContainer}>
        <NavMenu />
        {!account ? <PreLoginButtons /> : <UserMenu />}
    </nav>
);

export default connect(mapStateToProps)(Nav);
