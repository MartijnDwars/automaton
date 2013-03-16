/**
 * Representation of a transition
 *
 * @param {State} start The start state
 * @param {string} symbol The label of this transition
 * @param {State} end The end state
 */
function Transition(start, symbol, end) {
  this.start = start;
  this.symbol = symbol;
  this.end = end;
}

/**
 * String representation of a transition
 *
 * @returns {string} String representation
 */
Transition.prototype.toString = function () {
	return "[transition start="+start+" symbol="+symbol+" end="+end+"]";
}

module.exports = Transition;