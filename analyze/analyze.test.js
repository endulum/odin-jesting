const analyze = require('./analyze');

test('Analyze a typical array of numbers', () => {
	expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
	});
});

test('Analyze a typical array of numbers', () => {
	expect(analyze([6, 23, 48, 51, 60, 70, 74, 85])).toEqual({
		average: 52.125,
		min: 6,
		max: 85,
		length: 8
	});
});

test('Analyze an array of all similar numbers', () => {
	expect(analyze([5, 5, 5, 5, 5])).toEqual({
		average: 5,
		min: 5,
		max: 5,
		length: 5
	});
});

test('Analyze an array of one number', () => {
	expect(analyze([0])).toEqual({
		average: 0,
		min: 0,
		max: 0,
		length: 1
	});
});

