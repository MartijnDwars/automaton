var _ = require('underscore'),
    Nfa = require('../src/Nfa.js');

/**
 * Representation of a deterministic finite automaton
 *
 * @param {array} q Set of states
 * @param {alphabet} a Alphabet
 * @param {array} t Set of transitions
 * @param {state} s Start state
 * @param {array} f Set of accept states
 */
function Dfa(q, a, t, s, f) {
  Nfa.call(this, q, a, t, s, f);
}

Dfa.prototype = Object.create(Nfa.prototype);
Dfa.prototype.constructor = Dfa;

/**
 * Returns the next state after reading symbol
 * from state q.
 *
 * @param {State} state Origin state
 * @param {string} symbol The symbol to be read
 * @return {State} Next state
 */
Dfa.prototype.delta = function (state, symbol) {
  if (!this.a.contains(symbol)) {
    throw new Error("The symbol "+symbol+" is unknown in the alphabet "+this.a);
  }

  var transition = _.filter(this.t, function (t) {
    return t.start == state && t.symbol == symbol;
  });

  return transition[0].end;
};

/**
 * Returns the next state after reading word from
 * state q. Recursively calls itself and #delta()
 * to calculate the result.
 *
 * @param {State} state Origin state
 * @param {string} word The word to be read
 * @return {array} Next state
 */
Dfa.prototype.deltaStar = function (state, word) {
  if (word.length == 1) {
  	return this.delta(state, word);
  } else {
  	var v = word.slice(-1),
  		  a = word.slice(0, -1);

    return this.delta(this.deltaStar(state, v), a);
  }
};

/**
 * Check whether the word gets accepted by the machine
 *
 * @return {boolean} True iff the machine accepts word
 */
Dfa.prototype.accepts = function (word) {
  return _.contains(this.f, this.deltaStar(word));
};

module.exports = Dfa;