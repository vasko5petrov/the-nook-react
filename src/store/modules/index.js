import {combineReducers} from 'redux';
import dataReducer from './data';
import statusReducer from './status';
import uiReducer from './ui';

export default combineReducers({
    data: dataReducer,
    status: statusReducer,
    ui: uiReducer
});