import React, { useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from 'components/shared/ProtectedRoute';
import getUserAsPrerequisite from 'utils/helpers/getUserAsPrerequisite';
import { isLoading } from 'utils/helpers/statusChecker';
import Spinner from 'components/shared/Spinner';
import NotificationProvider from 'components/shared/Notifications/NotificationProvider';
import Nav from 'components/partials/Nav';
import routes from 'routes';
import { PRELOGIN_PATHS } from 'utils/enums/constants';
import style from './styles/AppLayout.scss';

const RouteComponents = {
    Route,
    ProtectedRoute
};

const AppLayout = () => {
    const getUserStatus = useSelector((store) => store.status.getIn(['getUser', 'status']));
    const user = useSelector((store) => store.user.get('profile'));
    const { replace } = useHistory();
    const location = useLocation();

    useEffect(() => {
        getUserAsPrerequisite({ replace, path: location.pathname, homeUrl: '/' });
    }, []);

    useEffect(() => {
        if (user && PRELOGIN_PATHS.includes(location.pathname)) {
            replace('/');
        }
    }, [location]);

    if (!getUserStatus || isLoading(getUserStatus)) {
        return (
            <div class={style.spinnerContainer}>
                <Spinner />
            </div>
        );
    }

    return (
        <NotificationProvider>
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
        </NotificationProvider>
    );
};

export default AppLayout;