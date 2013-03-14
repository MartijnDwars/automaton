function Alphabet(symbols) {
	if (!(symbols instanceof Array) || !symbols.length) {
		throw new Error("An alphabet is not allowed to be empty");
	}

	this.symbols = symbols;
}

module.export = Alphabet;