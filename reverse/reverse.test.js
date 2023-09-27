const reverse = require('./reverse');

test('reverses a normal string', () => {
	expect(reverse('Hello, world!')).toBe('!dlrow ,olleH');
});

test('reverses a normal string', () => {
	expect(reverse('the quick brown fox')).toBe('xof nworb kciuq eht');
});

test('unchanged when a string is a single character', () => {
	expect(reverse('a')).toBe('a');
});
