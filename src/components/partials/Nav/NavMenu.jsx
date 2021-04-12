import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import NavMenuItem from './NavMenuItem';
import { navItems } from 'utils/enums/constants';
import * as actions from 'store/modules/ui';
import style from './styles/Nav.scss';

@connect((store) => ({
    mobileNavExpanded: store.ui.get('mobileNavExpanded')
}))
export class NavMenu extends Component {
    toggleNavMenu = () => {
        this.props.dispatch(actions.toggleMobileNav());
    }
    render() {
        const navMenuStyles = classnames(style.navMenu, {[style.displayMobileNav]: this.props.mobileNavExpanded});
        return (
            <React.Fragment>
                <ul class={navMenuStyles}>
                    {navItems.map((navItem, index) => <NavMenuItem path={navItem.path} title={navItem.title} key={index} />)}
                </ul>
                <button class={style.mobileNavToggleBtn} onClick={() => this.toggleNavMenu()}>=</button>
            </React.Fragment>
        )
    }
}

export default NavMenu;
