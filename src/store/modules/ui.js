import { List, Map, fromJS } from 'immutable';
import { TOGGLE_MOBILE_NAV, ADD_NOTIFICATION, REMOVE_NOTIFICATION, SET_DARK_MODE } from '../actions/ui';

const DEFAULT_STATE = Map({
    darkMode: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
    mobileNavExpanded: false,
    notifications: List()
});

export default function projectReducer(state = DEFAULT_STATE, {type, payload}) {
    if(type === TOGGLE_MOBILE_NAV) {
        return state.set('mobileNavExpanded', !state.get('mobileNavExpanded'));
    }

    if(type === ADD_NOTIFICATION) {
        return state.update('notifications', (x) => x.push(fromJS(payload)));
    }

    if(type === REMOVE_NOTIFICATION) {
        return state.update('notifications', (x) => x.filter((notification) => notification.get('id') !== payload));
    }

    if(type === SET_DARK_MODE) {
        return state.set('darkMode', payload);
    }

    return state;
}