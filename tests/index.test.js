import * as wordify from '../src/index.js';

test('returns string', () => {
	expect(wordify.generateWords()).toBe('asdf');
});
