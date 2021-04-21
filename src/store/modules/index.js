import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user';
import dataReducer from './data';
import registerFormReducer from './registerForm';
import loginFormReducer from './loginForm';
import statusReducer from './status';
import uiReducer from './ui';
export default (history) => combineReducers({
    router: connectRouter(history),
    user: userReducer,
    data: dataReducer,
    registerForm: registerFormReducer,
    loginForm: loginFormReducer,
    status: statusReducer,
    ui: uiReducer
});