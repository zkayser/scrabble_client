import React from 'react';
import { shallow } from 'enzyme';
import { Board } from './Board';
import { Tile } from './Tile';
import { IN_PLAY } from '../constants';

test('It renders tiles', () => {
	const tiles = [ {id: 'A', status: IN_PLAY}, {id: 'B', status: IN_PLAY} ];
	const wrapper = shallow(<Board tiles={ tiles } status={ IN_PLAY } />);

	expect(wrapper.find(Tile).length).toEqual(2);
});