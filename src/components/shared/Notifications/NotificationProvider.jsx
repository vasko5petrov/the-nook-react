import React from 'react';
import { useSelector } from 'react-redux';
import Notification from './Notification';
import style from './styles/Notifications.scss';

const NotificationProvider = ({ children }) => {
    const notifications = useSelector(store => store.ui.get('notifications'));

    if (notifications.size === 0) {
        return children;
    }

    return (
        <div>
            <div className={style.container}>
                {notifications.map((notification) => (
                    <Notification
                        key={notification.get('id')}
                        id={notification.get('id')}
                        type={notification.get('type')}
                        message={notification.get('message')}
                        expiration={notification.get('expiration')}
                    />
                )).toList()}
            </div>
            {children}
        </div>
    )
};

export default NotificationProvider;
