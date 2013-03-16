var _ = require('underscore');

function Alphabet(symbols) {
	if (!(symbols instanceof Array) || !symbols.length) {
		throw new Error("An alphabet is not allowed to be empty");
	}

	this.symbols = symbols;
}

Alphabet.prototype.contains = function (symbol) {
	return _.contains(this.symbols, symbol);
};

Alphabet.prototype.toString = function () {
  return "[alphabet symbols="+this.symbols+"]";
};

module.exports = Alphabet;