import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { shallow } from 'enzyme';

import SingleElement from '../../../src/components/partials/SingleElement';

const singleElement = Map({
    title: 'Test title',
    body: 'Test body'
});

describe('<SingleElement />', function() {
    it('renders without exploding', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SingleElement singleElement={singleElement} />, div);
    });
    it('has correct welcome text', () => {
        const wrapper = shallow(<SingleElement singleElement={singleElement} />);
        expect(
            wrapper.find('h3').text() === singleElement.get('title')
            && wrapper.find('p').text() === singleElement.get('body')
        ).toBe(true);
    })
});
