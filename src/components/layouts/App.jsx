import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'components/shared/Spinner';
import routes from 'routes';
import style from './styles/App.scss';

const App = () => (
    <React.Fragment>
        <div class={style.container}>
            <h1>React/Redux boilerplate</h1>
        </div>
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
    </React.Fragment>
);

export default App;