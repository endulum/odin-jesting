function capitalize(string) {
	const stringArray = string.split('');

	if (
		(string.charCodeAt(0) >= 97) &&
		(string.charCodeAt(0) <= 122)
	) {
		stringArray[0] = stringArray[0].toUpperCase();
	}

	return stringArray.join('');
}

module.exports = capitalize;
