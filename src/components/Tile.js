import React from 'react';
import { NOT_PLAYED, IN_PLAY } from '../constants';

export const Tile = (props) => {
	const onStatusChange = (e) => {
		props.onStatusChange(props.tile.id, e.target.value);
	}

	return (
		<div className="Tile">
			<span className="Letter">{props.tile.id}</span>
			<select value={ props.tile.status } onChange={ onStatusChange } >
				{[NOT_PLAYED, IN_PLAY].map(status => (
					<option key={ status } value={ status }>{ status }</option>
				))}
			</select>
		</div>
	);
}