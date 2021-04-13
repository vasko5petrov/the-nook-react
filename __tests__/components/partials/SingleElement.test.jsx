import React from 'react';
import { Map } from 'immutable';
import { shallow } from 'enzyme';
import SingleElement from '../../../src/components/partials/SingleElement';

const singleElement = Map({
    title: 'Test title',
    body: 'Test body'
});

const wrapper = shallow(<SingleElement singleElement={singleElement} />);

describe('<SingleElement />', () => {
    it('renders without exploding', () => {
        expect(wrapper).toHaveLength(1)
    });
});
