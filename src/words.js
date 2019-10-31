import * as words from 'an-array-of-english-words';

const wordForIndex = index => {
	return words[index];
};

const indexForWord = word => {
	return Object.keys(words).find(key => words[key] === word);
};

export { wordForIndex, indexForWord };
