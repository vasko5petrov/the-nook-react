import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'store';
import AppLayout from './components/layouts/AppLayout';

import 'static/styles/global.scss';
import 'static/styles/main.scss';

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}>
        <AppLayout />
    </ConnectedRouter>
</Provider>,
document.querySelector('.app'));