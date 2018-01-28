import React from 'react';
import { shallow } from 'enzyme';
import { Score } from './Score';

test('It displays the score', () => {
	const wrapper = shallow(<Score score={ 35 } />);
	const span = wrapper.find('.Score-Title');

	expect(span.text()).toEqual('Score: 35');
});

test('getScore', () => {
	const getScore = jest.fn();
	const wrapper = shallow(<Score score={ 35 } getScore={ getScore } />);
	wrapper.find('.Score-Button').simulate('click');

	expect(getScore).toHaveBeenCalled();
});