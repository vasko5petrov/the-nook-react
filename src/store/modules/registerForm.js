import UserApi from 'api/UserApi';
import createFormReducer from 'store/reducerFactories/createFormReducer';
import { Map, fromJS } from 'immutable';

export const REGISTER = 'registerForm/REGISTER';

export const DEFAULT_STATE = Map({
    values: Map({
        Password: '',
        PasswordConfirmation: '',
        Email: '',
        FirstName: '',
        LastName: ''
    }),
    clientErrors: Map(),
    serverErrors: Map(),
});

const { reducer: registerForm, actions, actionCreators } = createFormReducer(DEFAULT_STATE, (state, action) => {
    if (action.type === `${REGISTER}_FULFILLD`) {
        const response = fromJS(action.payload.data);

        return state.set('serverErrors', response.get('Errors') || Map());
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