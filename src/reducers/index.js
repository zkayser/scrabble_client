import { initiateTiles } from '../utils/array_utils';
import { IN_PLAY } from '../constants';

const tiles = initiateTiles();

export default function scrabble(state = { tiles: tiles, score: 0 }, action) {
  switch (action.type) {
    case 'TOGGLE_PIECE':
      const { payload } = action;
      return {
        ...state,
        tiles: state.tiles.map(tile => {
          if (tile.id === payload.id) {
            return Object.assign({}, tile, payload.params);
          }
          return tile;
        })
      }
    case 'UPDATE_SCORE':
      return {
        ...state,
        score: action.payload.score
      };
    default:
      return state;
  }
}