const capitalize = require('./capitalize');

test('capitalizes the first letter of a normal string', () => {
	expect(capitalize('hello, world!')).toBe('Hello, world!');
});

test('capitalizes the first letter of a normal string', () => {
	expect(capitalize('the quick brown fox')).toBe('The quick brown fox');
});

test('unchanged string when first letter is capitalized', () => {
	expect(capitalize('Hello, world!')).toBe('Hello, world!');
});

test('unchanged string when whole string is capitalized', () => {
	expect(capitalize('HELLO, WORLD!')).toBe('HELLO, WORLD!');
});

test('unchanged string when first character is not a letter', () => {
	expect(capitalize('123')).toBe('123');
});
