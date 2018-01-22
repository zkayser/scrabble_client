import React from 'react';
import { Tile } from './Tile';

export const Board = (props) => {
	console.log('Inside Board with props: ', props);
	return (
		<div className="Board">
			{ props.tiles.map(tile => {
				if (tile.status === props.status) {
					return (<Tile tile={ tile } onStatusChange={ props.onStatusChange }/>)
				}
			})}
		</div>
	);
}