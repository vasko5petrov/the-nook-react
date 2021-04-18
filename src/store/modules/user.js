import { Map, fromJS } from 'immutable';

import { GET_USER, LOGOUT } from '../actions/user';

export const DEFAULT_STATE = Map({
    account: null
});

export default function (state = DEFAULT_STATE, action) {
    if (action.type === `${GET_USER}_REJECTED`) {
    }

    if (action.type === `${GET_USER}_FULFILLED`) {
        return state.set('account', fromJS(action.payload.data));
    }

    if (action.type === `${LOGOUT}_FULFILLED`) {
        return state.set('account', null);
    }

    return state;
}