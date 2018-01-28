import React from 'react';
import { shallow } from 'enzyme';
import { Tile } from './Tile';
import { IN_PLAY, NOT_PLAYED } from '../constants';

test('Tile displays a letter', () => {
	const wrapper = shallow(<Tile tile={ { id: 'A', status: NOT_PLAYED } } />);
	const span = wrapper.find('.Letter');

	expect(span.text()).toEqual('A');
});

test('Status change', () => {
	const mockChange = jest.fn();
	const tile = {id: 'A', status: NOT_PLAYED}
	const wrapper = shallow(<Tile tile={ tile } onStatusChange={ mockChange } />);

	wrapper.find('select').simulate('change', {target: { value: IN_PLAY }});
	expect(mockChange).toHaveBeenCalledWith('A', IN_PLAY);
});