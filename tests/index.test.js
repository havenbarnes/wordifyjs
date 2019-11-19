import * as wordify from '../src/index.js';

beforeEach(() => {
	// Set UUID seed
});

test('try test', () => {
	const pair = ['92bc740d-ccc9-45dd-aea7-0ed2982588cb', 'checklisted-bumptious-cretinised-barbels-commemoration-aftergrass-chocoholic-cathedra'];
	const translated = wordify.uuidFromWords(pair[1]);
	expect(translated).toBe(pair[0]);
});

// test('UUID can be translated to and from word ID', () => {
// 	for (var i = 0; i < 100; i++) {
// 		const pair = wordify.generateNewPair();
// 		const translated = wordify.uuidFromWords(pair[1]);
// 		expect(translated).toBe(pair[0]);
// 	}
// });
