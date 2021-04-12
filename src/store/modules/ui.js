import { Map } from 'immutable';
export const TOGGLE_MOBILE_NAV = 'vprofil/project/TOGGLE_MOBILE_NAV';

const DEFAULT_STATE = Map({
    mobileNavExpanded: false
});

export default function projectReducer(state = DEFAULT_STATE, {type}) {
    if(type === TOGGLE_MOBILE_NAV) {
        return state.set('mobileNavExpanded', !state.get('mobileNavExpanded'));
    }
    return state;
}

export const toggleMobileNav = () => ({
    type: TOGGLE_MOBILE_NAV
});