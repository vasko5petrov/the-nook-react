import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';

import 'static/styles/global.scss';
import 'static/styles/main.scss';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Route path="/" component={AppLayout} />
    </Router>
</Provider>,
document.querySelector('.app'));