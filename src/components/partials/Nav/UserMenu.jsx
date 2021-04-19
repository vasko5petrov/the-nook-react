import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dropdown, { Toggle, Menu, MenuItem } from '../../shared/Dropdown';
import * as userActions from 'store/actions/user';
import style from './styles/UserMenu.scss';

const mapStateToProps = (store) => ({
    profile: store.user.get('profile')
});

const UserMenu = ({ profile, dispatch, history }) => {
    if (!profile) return null;
    const handleLogout = async () => {
        const data = await dispatch(userActions.logout());
        dispatch(userActions.getUser());
        if(data.value.data.message) {
            history.push('/');
        }
    };

    return (
        <div class={style.userMenuContainer}>
            <Dropdown>
                <Toggle className={style.userDropdown}>{profile.get('FirstName')} {profile.get('LastName')}</Toggle>
                <Menu>
                    <MenuItem onClick={() => history.push('/profile')}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout} className={style.logoutOption}>Log out</MenuItem>
                </Menu>
            </Dropdown>
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(UserMenu));
