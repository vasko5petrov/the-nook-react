import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'components/shared/Spinner';
import Nav from 'components/partials/Nav';
import routes from 'routes';
import style from './styles/AppLayout.scss';

const AppLayout = () => (
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

export default AppLayout;