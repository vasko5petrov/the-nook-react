import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const profile = useSelector((store) => store.user.get('profile'));
    return (
        <Route {...rest} render={(props) => (profile ? <Component {...rest} {...props} /> : <Redirect to={{pathname: '/login', prevLocation: props.location.pathname}} />)} />
    );
};

export default ProtectedRoute;