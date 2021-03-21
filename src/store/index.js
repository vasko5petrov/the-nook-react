import { createStore, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from './modules';

const middleware = [thunk, reduxPromise];

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    serialize: {
        immutable: Immutable
    }
}) || compose;

export default createStore(rootReducer, withDevTools(
    applyMiddleware(...middleware)
));