import { Map } from 'immutable';
import { camelCase } from 'change-case';

const createStatusReducer = (fields) => (state = Map(), action) => {
    const actionTypeWithNoStatus = action.type.replace(/(_PENDING|_FULFILLED|_REJECTED)/, '');
    const foundField = fields.find((field) => actionTypeWithNoStatus === field.action);

    if (foundField) {
        const actionStatus = action.type.split('_').pop().toLowerCase();
        const statusPath = typeof foundField.path === 'function' ? foundField.path(action) : [];

        const key = foundField.key || camelCase(foundField.action.split('/').pop());

        return state.setIn([key, ...statusPath, 'status'], actionStatus)
            .setIn([key, ...statusPath, 'statusCode'], action.payload && action.payload.status);
    }

    return state;
};

export default createStatusReducer;
