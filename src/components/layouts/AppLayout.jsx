import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from 'components/shared/ProtectedRoute';
import getUserAsPrerequisite from 'utils/helpers/getUserAsPrerequisite';
import Spinner from 'components/shared/Spinner';
import Nav from 'components/partials/Nav';
import routes from 'routes';
import { isLoading } from '../../utils/helpers/statusChecker';
import style from './styles/AppLayout.scss';

const RouteComponents = {
    Route,
    ProtectedRoute
};


const mapStateToProps = (store) => ({
    getUserStatus: store.status.getIn(['getUser', 'status'])
});

const AppLayout = ({ location, history: { replace }, getUserStatus }) => {
    useEffect(() => {
        getUserAsPrerequisite({ replace, path: location.pathname, homeUrl: '/' });
    }, []);

    if (!getUserStatus || isLoading(getUserStatus)) {
        return <Spinner />;
    }

    return (
        <div class={style.container}>
            <Nav />
            <Suspense fallback={<Spinner />} >
                <Switch>
                    {routes.map(({ path, exact, component, routes, protectedRoute }, index) => {
                        const RouteComponent = RouteComponents[protectedRoute ? 'ProtectedRoute' : 'Route'];
                        return (
                            <RouteComponent
                                key={index}
                                path={path}
                                exact={exact}
                                component={component}
                                routes={routes}
                            />
                        );
                    })}
                </Switch>
            </Suspense>
        </div>
    );
};

export default withRouter(connect(mapStateToProps)(AppLayout));