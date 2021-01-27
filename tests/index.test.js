import * as wordify from '../src/index.js';

beforeEach(() => {
	// Set UUID seed
});

test('UUID can be translated to and from word ID', () => {
	for (var i = 0; i < 100; i++) {
		const pair = wordify.generateNewPair();
		const translated = wordify.uuidFromWords(pair[1]);
		expect(translated).toBe(pair[0]);
	}
});
