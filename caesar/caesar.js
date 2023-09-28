const caesar = {
	letters: 'abcdefghijklmnopqrstuvwxyz'.split(''),

	encrypt: function(string, shift) {
		string = string.toLowerCase().split('');

		for (let i = 0; i < string.length; i++) {
			if (this.letters.includes(string[i])) {
				const newPosition = (this.letters.indexOf(string[i]) + (shift % 26)) % 26;
				string[i] = this.letters[newPosition];
			}
		}

		return string.join('');
	},

	decrypt: function(string, shift) { 
		string = string.split('');

		for (let i = 0; i < string.length; i++) {
			if (this.letters.includes(string[i])) {
				let newPosition = (this.letters.indexOf(string[i]) - (shift % 26)) % 26;
				if (newPosition < 0) {
					newPosition = 26 - ((shift % 26) - this.letters.indexOf(string[i]))
				}
				string[i] = this.letters[newPosition];
			}
		}

		return string.join('');
	}
}

module.exports = caesar;
