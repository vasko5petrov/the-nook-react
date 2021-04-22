import { Map } from 'immutable';
import { TOGGLE_MOBILE_NAV } from '../actions/ui';

const DEFAULT_STATE = Map({
    mobileNavExpanded: false
});

export default function projectReducer(state = DEFAULT_STATE, {type}) {
    if(type === TOGGLE_MOBILE_NAV) {
        return state.set('mobileNavExpanded', !state.get('mobileNavExpanded'));
    }
    return state;
}