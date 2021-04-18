import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as userActions from 'store/actions/user';
import style from './styles/Nav.scss';

const mapStateToProps = (store) => ({
    account: store.user.get('account')
});

const UserMenu = ({ account, dispatch, history }) => {
    if (!account) return null;
    const handleLogout = async () => {
        const data = await dispatch(userActions.logout());
        dispatch(userActions.getUser());
        if(data.value.data.message) {
            history.push('/');
        }
    };

    return (
        <div class={style.userMenuContainer}>
            <p class={style.userName}>{account.get('FirstName')} {account.get('LastName')}</p>
            <div onClick={handleLogout} className={style.logoutButton}>sign out</div>
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(UserMenu));
