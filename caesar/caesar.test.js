const caesar = require('./caesar');

test('encrypts successfully', () => { 
	expect(caesar.encrypt('Hello, World!', 5)).toBe('mjqqt, btwqi!');
});

test('+26 to encryption shift makes no difference', () => { 
	expect(caesar.encrypt('Hello, World!', 31)).toBe('mjqqt, btwqi!');
});

test('encrypts all letters successfully', () => { 
	expect(caesar.encrypt('The quick brown fox jumps over the lazy dog.', 10)).toBe('dro aesmu lbygx pyh tewzc yfob dro vkji nyq.');
});

test('decrypts successfully', () => { 
	expect(caesar.decrypt('mjqqt, btwqi!', 5)).toBe('hello, world!');
});

test('+26 to encryption shift makes no difference', () => { 
	expect(caesar.decrypt('mjqqt, btwqi!', 31)).toBe('hello, world!');
});

test('encrypts all letters successfully', () => { 
	expect(caesar.decrypt('dro aesmu lbygx pyh tewzc yfob dro vkji nyq.', 10)).toBe('the quick brown fox jumps over the lazy dog.');
});

