import { Map, List, fromJS } from 'immutable';
import { GET_DATA } from 'store/actions/data';

const DEFAULT_STATE = Map({
    data: null
});

export default function dataReducer(state = DEFAULT_STATE, {type, payload}) {
    if(type === `${GET_DATA}_FULFILLED`) {
        return state.set('data', fromJS(payload.data));
    }
    return state;
}