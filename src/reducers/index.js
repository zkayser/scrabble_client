import { initiateTiles } from '../utils/array_utils';
import { IN_PLAY, NOT_PLAYED } from '../constants';

const tiles = initiateTiles();

export default function scrabble(state = { tiles: tiles, score: 0 }, action) {
  switch (action.type) {
    case 'TOGGLE_PIECE':
      const { payload } = action;
      return {
        ...state,
        tiles: mapOverTilesAndKeepTilesInPlayInTheRightOrderSoTheUXDoesntSuck(state.tiles, payload)
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

// This sucks, but I need a helper function. Also, I don't know what to call this.
const mapOverTilesAndKeepTilesInPlayInTheRightOrderSoTheUXDoesntSuck = (tiles, payload) => {
  const result = tiles.map(tile => {
    if (tile.id === payload.id) {
      return Object.assign({}, tile, payload.params);
    }
    return tile;
  });

  // Okay, now you have a list of tiles with the right statuses. Now you need to filter for the IN_PLAY
  // tiles and keep them up front. Also, if the tile.id === payload.id, then you have a new tile that should
  // be placed at the end of the IN_PLAY tiles. Easy-peasy.
  const inPlayTiles = result.filter(tile => tile.status === IN_PLAY);
  const notPlayedTiles = result.filter(tile => tile.status === NOT_PLAYED);
  // Yep, now get the tile being updated and put it at the end of the tiles in play.
  const newInPlayTiles = (payload.params.status === IN_PLAY)
    ? inPlayTiles.filter(tile => tile.id !== payload.id).concat({id: payload.id, status: IN_PLAY})
    : inPlayTiles;

  // Cool.
  const nowEverythingIsFineOrAtLeastIHope = newInPlayTiles.concat(notPlayedTiles);
  return nowEverythingIsFineOrAtLeastIHope;
};