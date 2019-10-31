import { wordForIndex } from './words';
import uuidv4 from 'uuid/v4';

const generateWords = () => {
	return 'asdf';
};

const generateUUID = () => {
	return 'asdf';
};

const generateNewPair = () => {
	const uuid = uuidv4();
	const words = [];
	const segmentLength = 4;
	for (var i = 0; i < uuid.length - segmentLength; i += segmentLength) {
		const segment = uuid.substring(i, i + segmentLength).replace('-', '1');
		const wordIndex = parseInt(segment, 16);
		words.push(wordForIndex(wordIndex));
	}
	return [uuid, words.join('-')];
};

export { generateWords, generateUUID, generateNewPair };
