import {combineReducers} from 'redux';
import dataReducer from './data';
import registerFormReducer from './registerForm';
import loginFormReducer from './loginForm';
import statusReducer from './status';
import uiReducer from './ui';

export default combineReducers({
    data: dataReducer,
    registerForm: registerFormReducer,
    loginForm: loginFormReducer,
    status: statusReducer,
    ui: uiReducer
});