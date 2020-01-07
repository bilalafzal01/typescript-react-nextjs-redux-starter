import React from 'react';
import { shallow } from 'enzyme';

import Button from '@components/button';
import BUTTON from '@constants/button';

describe('<Index />', () => {
  describe('<Button />', () => {
    const wrapper = shallow(<Button>{BUTTON.DONE}</Button>);

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should get children', () => {
      expect(wrapper.find('i').text()).toBe('done');
    });
  });
});
