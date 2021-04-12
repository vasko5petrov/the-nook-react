import React, { Component } from 'react';
import NavMenu from './NavMenu';
import PreLoginButtons from './PreLoginButtons';
import style from './styles/Nav.scss';

class Nav extends Component {
    render() {
        return (
            <nav class={style.navContainer}>
                <NavMenu />
                <PreLoginButtons />
            </nav>
        );
    }
}

export default Nav;
