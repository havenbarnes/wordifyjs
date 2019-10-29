import * as words from 'an-array-of-english-words';

const wordForByte = () => {
	return words[0];
};

const size = () => {
	return Object.keys(words).length;
};

export default {
	wordForByte,
	size
};
