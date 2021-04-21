import { createStore, applyMiddleware, compose } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import { createBrowserHistory } from 'history';
import reduxPromise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import createRootReducer from './modules';

export const history = createBrowserHistory();

const middleware = [thunk, reduxPromise];

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    serialize: {
        immutable: Immutable
    }
}) || compose;

export default createStore(enableBatching(createRootReducer(history)), withDevTools(
    applyMiddleware(...middleware)
));