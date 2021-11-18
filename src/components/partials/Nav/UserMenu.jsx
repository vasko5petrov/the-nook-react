import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Dropdown, { Toggle, Menu, MenuItem } from 'components/shared/Dropdown';
import * as userActions from 'store/actions/user';
import style from './styles/UserMenu.scss';

const UserMenu = () => {
    const profile = useSelector((store) => store.user.get('profile'));
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = async () => {
        const data = await dispatch(userActions.logout());
        dispatch(userActions.getUser());
        if(data.value.data.message) {
            history.push('/');
        }
    };

    if (!profile) return null;

    return (
        <div className={style.userMenuContainer}>
            <Dropdown>
                <Toggle className={style.userDropdown}>{profile.get('firstName')} {profile.get('lastName')}</Toggle>
                <Menu>
                    <MenuItem onClick={() => history.push('/profile')}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout} className={style.logoutOption}>Log out</MenuItem>
                </Menu>
            </Dropdown>
        </div>
    );
};

export default UserMenu;
