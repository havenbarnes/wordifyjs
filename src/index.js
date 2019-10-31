import { wordForIndex, indexForWord } from './words';
import uuidv4 from 'uuid/v4';

const generateNewPair = () => {
	const uuid = uuidv4();
	return [uuid, wordsFromUUID(uuid)];
};

const getIntegerFromHex = hex => {
	return parseInt(hex, 16);
};

const getHexFromInteger = integer => {
	let hex = Number(integer).toString(16);
	return hex;
};

const wordsFromUUID = uuid => {
	const uuidNoDash = uuid.replace(/-/g, '');
	const words = [];
	const segmentLength = 4;
	for (var i = 0; i < uuidNoDash.length; i += segmentLength) {
		const segment = uuidNoDash.substring(i, i + segmentLength);
		const wordIndex = getIntegerFromHex(segment);
		words.push(wordForIndex(wordIndex));
	}
	return words.join('-');
};

const uuidFromWords = wordUUID => {
	const words = wordUUID.split('-');
	let uuid = '';
	words.forEach((word, index) => {
		const wordIndex = indexForWord(word);
		const hex = getHexFromInteger(wordIndex);
		uuid += hex;
		const dashIndexes = [1, 2, 3, 4];
		if (dashIndexes.includes(index)) {
			uuid += '-';
		}
	});
	return uuid;
};

export { generateNewPair, wordsFromUUID, uuidFromWords };
