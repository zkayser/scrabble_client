export const togglePieceStatus = ({id, params = {}}) => {
	return {
		type: 'TOGGLE_PIECE',
		payload: {
			id,
			params
		}
	};
}

export const updateScore = (score) => {
	return {
		type: 'UPDATE_SCORE',
		payload: { score }
	}
}