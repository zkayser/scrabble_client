import { NOT_PLAYED } from '../constants';

export const initiateTiles = () => {
	const letters = shuffle(alphabet).slice(-7);
	const result = letters.map(letter => {
		return {
				id: letter,
				status: NOT_PLAYED
			}
		});
	return result;
};

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const shuffle = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}