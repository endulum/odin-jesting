function reverse(string) {
	const stringArray = string.split('');
	const returnArray = [];
	let index = stringArray.length - 1;
	while (index >= 0) {
		returnArray.push(stringArray[index]);
		index--;
	}
	return returnArray.join('');
}

module.exports = reverse;
