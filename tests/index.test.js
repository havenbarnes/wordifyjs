import * as wordify from '../src/index.js';

beforeEach(() => {
	// Set UUID seed
});

test('test', () => {
	console.log(wordify.generateNewPair());
	expect('asdf').toBe('asdf');
});
