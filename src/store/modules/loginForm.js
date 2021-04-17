import UserApi from 'api/UserApi';
import createFormReducer from 'store/reducerFactories/createFormReducer';
import { Map, fromJS } from 'immutable';

export const LOGIN = 'loginForm/LOGIN';

export const DEFAULT_STATE = Map({
    values: Map({
        Email: '',
        Password: '',
    }),
    loading: false,
    clientErrors: Map(),
    serverError: null,
});

const { reducer: loginForm, actions, actionCreators } = createFormReducer(DEFAULT_STATE, (state, action) => {
    if (action.type === `${LOGIN}_PENDING`) {
        return state.set('loading', true);
    }
    if (action.type === `${LOGIN}_REJECTED`) {
        const response = fromJS(action.payload.response.data);
        return state.set('serverError', response.get('message') || '').set('loading', false);
    }

    return state;
}, 'loginForm');

export const { UPDATE_FIELD, UPDATE_ERROR, UPDATE_ERRORS, RESET } = actions;
export const { updateField, updateError, updateErrors, reset } = actionCreators;

export const login = (formData) => ({
    type: LOGIN,
    payload: UserApi.login(formData)
});

export default loginForm;