import {combineReducers} from 'redux';
import dataReducer from './data';
import registerFormReducer from './registerForm';
import statusReducer from './status';
import uiReducer from './ui';

export default combineReducers({
    data: dataReducer,
    registerForm: registerFormReducer,
    status: statusReducer,
    ui: uiReducer
});