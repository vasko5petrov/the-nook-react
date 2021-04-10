import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from '../../../src/components/shared/Spinner';

describe('<Spinner />', function() {
    it('renders without exploding', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Spinner />, div);
    });
});
