import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/layouts/App';
import './static/styles/main.scss';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Route path="/" component={App} />
    </Router>
</Provider>,
document.querySelector('.app'));