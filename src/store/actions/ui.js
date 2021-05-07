import { v4 } from 'uuid';

export const TOGGLE_MOBILE_NAV = 'ui/TOGGLE_MOBILE_NAV';
export const ADD_NOTIFICATION = 'ui/ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'ui/REMOVE_NOTIFICATION';

export const toggleMobileNav = () => ({
    type: TOGGLE_MOBILE_NAV
});

export const addNotification = ({type, message, expiration}) => ({
    type: ADD_NOTIFICATION,
    payload: {
        id: v4(),
        type,
        message,
        expiration
    }
});

export const removeNotification = (id) => ({
    type: REMOVE_NOTIFICATION,
    payload: id
});