import React from 'react';
import DataView from 'components/views/DataView';
import style from './styles/App.scss';

const App = () => (
    <React.Fragment>
        <div class={style.container}>
            <h1>React/Redux boilerplate</h1>
        </div>
        <DataView />
    </React.Fragment>
);

export default App;