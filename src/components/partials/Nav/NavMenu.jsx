import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import NavMenuItem from './NavMenuItem';
import { navItems } from 'utils/enums/constants';
import * as actions from 'store/modules/ui';
import style from './styles/Nav.scss';

const mapStateToProps = (store) => ({
    mobileNavExpanded: store.ui.get('mobileNavExpanded'),
    account: store.user.get('account')
})

const NavMenu = ({ dispatch, mobileNavExpanded, account }) => {
    const toggleNavMenu = () => {
        dispatch(actions.toggleMobileNav());
    }
    const navMenuStyles = classnames(style.navMenu, {[style.displayMobileNav]: mobileNavExpanded});

    return (
        <React.Fragment>
            <ul class={navMenuStyles}>
                {navItems.map((navItem) => {
                    return <NavMenuItem {...navItem} account={!!account} key={navItem.path} />;
                })}
            </ul>
            <button class={style.mobileNavToggleBtn} onClick={() => toggleNavMenu()}>=</button>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(NavMenu);
