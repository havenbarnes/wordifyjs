import * as wordify from '../src/index.js';

beforeEach(() => {
	// Set UUID seed
});

test('generate words returns string', () => {
	expect(wordify.generateWords()).toBe('asdf');
});
