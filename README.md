# WordifyJS

#### A JS library for "humanizing" UUIDs

![badge](https://github.com/havenbarnes/wordifyjs/workflows/Node%20CI/badge.svg)


## Installing

```bash
$ npm install wordifyjs
```

## Usage

Importing wordify:

```js
import * as wordify from 'wordifyjs';
```

WordifyJS exposes a few utility functions for generating and converting UUIDs to and from word combinations.

```js
wordify.generateNewPair(); // returns [uuid, word-combination]

wordify.wordsFromUUID(uuid); // Existing UUID -> Word combination

wordify.uuidFromWords(words); // Existing Word Combination -> UUID
```

## License

[ISC](LICENSE)
