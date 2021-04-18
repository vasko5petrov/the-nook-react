import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
    account: store.user.get('account')
});

const ProtectedRoute = ({ component: Component, account, ...rest }) => (
    <Route {...rest} render={(props) => (account ? <Component {...rest} {...props} /> : <Redirect to='/' />)} />
);

export default connect(mapStateToProps)(ProtectedRoute);