import React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import PreLoginButtons from './PreLoginButtons';
import style from './styles/Nav.scss';

const mapStateToProps = (store) => ({
    account: store.user.get('account')
});

const Nav = ({account}) => (
    <nav class={style.navContainer}>
        <NavMenu />
        {!account && <PreLoginButtons />}
    </nav>
);

export default connect(mapStateToProps)(Nav);
