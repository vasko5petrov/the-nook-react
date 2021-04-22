import React, { useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from 'components/shared/ProtectedRoute';
import getUserAsPrerequisite from 'utils/helpers/getUserAsPrerequisite';
import { isLoading } from '../../utils/helpers/statusChecker';
import Spinner from 'components/shared/Spinner';
import Nav from 'components/partials/Nav';
import routes from 'routes';
import style from './styles/AppLayout.scss';

const RouteComponents = {
    Route,
    ProtectedRoute
};

const AppLayout = () => {
    const getUserStatus = useSelector((store) => store.status.getIn(['getUser', 'status']));
    const { replace } = useHistory();
    const location = useLocation();

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
                    <Redirect to="/404" />
                </Switch>
            </Suspense>
        </div>
    );
};

export default AppLayout;