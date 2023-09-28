function analyze(numbers) {
	const length = numbers.length;
	const average = numbers.reduce((acc, curr) => acc + curr, 0) / length;
	const min = Math.min(...numbers);
	const max = Math.max(...numbers);

	return { average, min, max, length }
}

module.exports = analyze;
