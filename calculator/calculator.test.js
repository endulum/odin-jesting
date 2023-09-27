const calculator = require ('./calculator');

test('performs addition: 1 + 2 = 3', () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test('performs subtraction: 2 - 1 = 1', () => {
	expect(calculator.subtract(2, 1)).toBe(1);
});

test('performs multiplication: 5 * 2 = 10', () => {
	expect(calculator.multiply(5, 2)).toEqual(10);
});

test('performs division: 10 / 2 = 5', () => {
	expect(calculator.divide(10, 2)).toBe(5);
});
