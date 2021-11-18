import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from 'components/shared/ProtectedRoute';
import getUserAsPrerequisite from 'utils/helpers/getUserAsPrerequisite';
import { isLoading } from 'utils/helpers/statusChecker';
import Spinner from 'components/shared/Spinner';
import NotificationProvider from 'components/shared/Notifications/NotificationProvider';
import Nav from 'components/partials/Nav';
import routes from 'routes';
import { PRELOGIN_PATHS } from 'utils/enums/constants';
import * as uiActions from 'store/actions/ui';
import style from './styles/AppLayout.scss';

const RouteComponents = {
    Route,
    ProtectedRoute
};

const AppLayout = () => {
    const getUserStatus = useSelector((store) => store.status.getIn(['getUser', 'status']));
    const user = useSelector((store) => store.user.get('profile'));
    const darkMode = useSelector((store) => store.ui.get('darkMode'));
    const { replace } = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const setTheme = (name) => {
        for (const property in themeColours[name]) {
            document.body.style.setProperty(property, themeColours[name][property]);
        }
    };

    const themeColours = {
        light: {
            "--color": "#333",
            "--background-color": "#f3f3f3",
            "--item-background-color": "#ffffff",
            "--item-border-color": "#e8e8e8"
        },
        dark: {
            "--color": "#f3f3f3",
            "--background-color": "#333",
            "--item-background-color": '#3f3f3f',
            "--item-border-color": "#555"
        },
    };

    useEffect(() => {
        setTheme(!darkMode ? 'light' : 'dark');
    }, [darkMode]);


    useEffect(() => {
        console.log('test');
        getUserAsPrerequisite({ replace, path: location.pathname, homeUrl: '/' });
    }, []);

    useEffect(() => {
        if (user && PRELOGIN_PATHS.includes(location.pathname)) {
            replace('/');
        }
    }, [location]);

    useEffect(() => {
        dispatch(uiActions.addNotification({
            type: 'SUCCESS',
            message: 'Welcome to the Nook!'
        }));
        dispatch(uiActions.addNotification({
            type: 'INFO',
            message: 'This is a notification that will expire in 16 seconds unless you hover over it.',
            expiration: 16000
        }));
    }, []);

    if (getUserStatus && !isLoading(getUserStatus)) {
        console.log('testing');
        return (
            <NotificationProvider>
                <div className={style.container}>
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
    }

    return (
        <div className={style.spinnerContainer}>
            <Spinner />
        </div>
    );
};

export default AppLayout;