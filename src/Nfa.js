var _ = require('underscore');

/**
 * Representation of a nondeterministic finite automaton
 *
 * @param {array} q Set of states
 * @param {alphabet} a Alphabet
 * @param {array} t Set of transitions
 * @param {state} s Start state
 * @param {array} f Set of accept states
 */
function Nfa(q, a, t, s, f) {
  this.q = q;
  this.a = a;
  this.t = t || {};
  this.s = s;
  this.f = f;
}

Nfa.prototype.delta = function (state, symbol) {
  if (!this.a.contains(symbol)) {
    throw new Error("The symbol "+symbol+" is unknown in the alphabet "+this.a);
  }

  var applicable = _.filter(this.t, function (t) {
    return t.start == state && t.symbol == symbol;
  });

  return _.map(applicable, function (t) {
    return t.end;
  });
};

/**
 * Returns the set of states that is reached after
 * reading word from state q. Recursively calls
 * itself and #delta() to calculate the result.
 *
 * @param {State} state Origin state
 * @param {string} word The word to be read
 * @return {array} An array of reachable states
 */
Nfa.prototype.deltaStar = function (state, word) {
  if (word.length == 1) {
  	return this.delta(state, word);
  } else {
  	var v = w.slice(-1),
  		  a = w.slice(0, -1);

    return _.compose(_.flatten, _.map)(function (e) {
      return this.delta(e, a);
    });
  }
};

/**
 * Check whether the word gets accepted by the machine
 *
 * @return {boolean} True iff the machine accepts word
 */
Nfa.prototype.accepts = function (word) {
  return _.intersection(this.deltaStar(), this.f).length > 0;
};

module.exports = Nfa;