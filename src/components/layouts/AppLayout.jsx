import React, { useEffect, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import getUserAsPrerequisite from 'utils/helpers/getUserAsPrerequisite';
import Spinner from 'components/shared/Spinner';
import Nav from 'components/partials/Nav';
import routes from 'routes';
import style from './styles/AppLayout.scss';

const AppLayout = ({location, history: { replace }}) => {

    useEffect(() => {
        getUserAsPrerequisite({ replace, path: location.pathname, homeUrl: '/' });
    }, []);

    return (
        <div class={style.container}>
            <Nav />
            <Suspense fallback={<Spinner />} >
                <Switch>
                    {routes.map(({ path, exact, component, routes }, index) => (
                        <Route
                            key={index}
                            path={path}
                            exact={exact}
                            component={component}
                            routes={routes}
                        />
                    ))}
                </Switch>
            </Suspense>
        </div>
    );
};

export default withRouter(AppLayout);