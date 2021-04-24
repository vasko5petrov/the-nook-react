import { Map, fromJS } from 'immutable';

import { GET_USER, LOGOUT } from '../actions/user';

export const DEFAULT_STATE = Map({
    profile: null
});

export default function (state = DEFAULT_STATE, action) {
    if (action.type === `${GET_USER}_FULFILLED`) {
        return state.set('profile', fromJS(action.payload.data));
    }
    
    if (action.type === `${GET_USER}_REJECTED`) {
        return state.set('profile', null);
    }

    if (action.type === `${LOGOUT}_FULFILLED`) {
        return state.set('profile', null);
    }

    return state;
}