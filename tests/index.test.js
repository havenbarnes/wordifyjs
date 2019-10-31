import * as wordify from '../src/index.js';

beforeEach(() => {
	// Set UUID seed
});

test('UUID can be translated to and from word ID', () => {
	const pair = wordify.generateNewPair();
	const translated = wordify.uuidFromWords(pair[1]);
	console.log(pair);
	console.log(translated);
	expect(translated).toBe(pair[0]);
});
