import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (store) => ({
    profile: store.user.get('profile')
});

const ProtectedRoute = ({ component: Component, profile, ...rest }) => (
    <Route {...rest} render={(props) => (profile ? <Component {...rest} {...props} /> : <Redirect to={{pathname: '/login', prevLocation: props.location.pathname}} />)} />
);

export default connect(mapStateToProps)(ProtectedRoute);