import React from 'react';

export const Score = (props) => {
	return (
		<div className="Score">
			<span className="Score-Title">Score: { props.score }</span>
			<button className="Score-Button" onClick={ props.getScore }>
				Get Score
			</button>
		</div>
	);
}