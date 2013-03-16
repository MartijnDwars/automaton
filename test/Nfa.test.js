var assert = require('assert'),
    Alphabet = require('../src/Alphabet.js'),
    State = require('../src/State.js'),
    Transition = require('../src/Transition.js'),
    Nfa = require('../src/Nfa.js');

describe('Nfa', function () {
  var q0 = new State('q0');
  var q1 = new State('q1');
  var t1 = new Transition(q0, 'a', q1);

  var A = new Alphabet(['a', 'b']);     // alphabet A
  var Q = [q0, q1];                     // set of states Q
  var D = [t1];                         // set of transitions D
  var F = [q1];                         // set of accept states F
  var N = new Nfa(Q, A, D, q0, F);      // resulting nfa

  describe('#delta', function () {
    it('produces an error on a transition with invalid symbol', function () {
      assert.throws(function () {
        N.delta(q0, 'c');
      }, Error);
    });

    it('produces an empty set next states on (q0, b)', function () {
      assert.deepEqual(N.delta(q0, 'b'), []);
    });

    it('produces a correct set of next states', function () {
      assert.deepEqual(N.delta(q0, 'a'), [q1]);
    });
  });

  describe('#deltaStar', function () {
    it('produces an error on a transition with invalid word', function () {
      assert.throws(function () {
        N.deltaStar(q1, 'c');
      }, Error);
    });

    it('produces an empty set next states on (q1, b)', function () {
      assert.deepEqual(N.deltaStar(q1, 'b'), []);
    });

    it('produces a set with a single next state', function () {
      assert.deepEqual(N.deltaStar(q0, 'a'), [q1]);
    });

    // produce a set with multiple next states
    // test branching? with dead-end branches? test whether the resulting set is flattened? test epsilon transitions?
  });

  // test closure
  // test #accepts

  /*
  describe('#accepts', function () {

  })
  */
});