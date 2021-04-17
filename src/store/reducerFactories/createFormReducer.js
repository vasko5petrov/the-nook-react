import { toJS } from 'immutable';
const createFormReducer = (defaultState, composedReducer, formName) => {
    const UPDATE_FIELD = `${formName}/UPDATE_FIELD`;
    const UPDATE_ERROR = `${formName}/UPDATE_ERROR`;
    const UPDATE_ERRORS = `${formName}/UPDATE_ERRORS`;
    const RESET = `${formName}/RESET`;

    return {
        reducer: (state=defaultState, action) => {
            if (action.type === UPDATE_FIELD) {
                return composedReducer(
                    state.setIn(['values', action.payload.field], action.payload.value).delete(['serverError']),
                    action
                );
            }

            if (action.type === UPDATE_ERROR) {
                return composedReducer(
                    state.setIn(['clientErrors', action.payload.field], action.payload.value),
                    action
                );
            }

            if (action.type === UPDATE_ERRORS) {
                return composedReducer(
                    state.set('clientErrors', action.payload),
                    action
                );
            }

            if (action.type === RESET) {
                return composedReducer(defaultState, action);
            }

            return composedReducer(state, action);
        },
        actions: { UPDATE_FIELD, UPDATE_ERROR, UPDATE_ERRORS, RESET },
        actionCreators: {
            updateField: (payload) => ({type: UPDATE_FIELD, payload}),
            updateError: (payload) => ({type: UPDATE_ERROR, payload}),
            updateErrors: (payload) => ({type: UPDATE_ERRORS, payload}),
            reset: (payload) => ({type: RESET, payload}),
        }
    };
};

export default createFormReducer;