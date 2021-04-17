import UserApi from 'api/UserApi';
import createFormReducer from 'store/reducerFactories/createFormReducer';
import { Map, fromJS } from 'immutable';

export const REGISTER = 'registerForm/REGISTER';

export const DEFAULT_STATE = Map({
    values: Map({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        PasswordConfirmation: ''
    }),
    loading: false,
    clientErrors: Map(),
    serverError: ''
});

const { reducer: registerForm, actions, actionCreators } = createFormReducer(DEFAULT_STATE, (state, action) => {
    if (action.type === `${REGISTER}_PENDING`) {
        return state.set('loading', true);
    }
    if (action.type === `${REGISTER}_REJECTED`) {
        const response = fromJS(action.payload.response.data);
        return state.set('serverError', response.get('message') || '').set('loading', false);
    }

    return state;
}, 'registerForm');

export const { UPDATE_FIELD, UPDATE_ERROR, UPDATE_ERRORS, RESET } = actions;
export const { updateField, updateError, updateErrors, reset } = actionCreators;

export const register = (formData) => ({
    type: REGISTER,
    payload: UserApi.register(formData)
});

export default registerForm;