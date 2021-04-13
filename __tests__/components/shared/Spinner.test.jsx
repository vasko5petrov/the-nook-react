import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../../../src/components/shared/Spinner';

const wrapper = shallow(<Spinner  />);

describe('<Spinner />', () => {
    it('renders without exploding', () => {
        expect(wrapper).toHaveLength(1)
    });
});