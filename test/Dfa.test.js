var assert = require('assert'),
    Alphabet = require('../src/Alphabet.js'),
    State = require('../src/State.js'),
    Transition = require('../src/Transition.js'),
    Dfa = require('../src/Dfa.js');

describe('Dfa', function () {
  var q0 = new State('q0');
  var q1 = new State('q1');
  var t1 = new Transition(q0, 'a', q1);
  var t2 = new Transition(q1, 'a', q0);

  var A = new Alphabet(['a']);          // alphabet A
  var Q = [q0, q1];                     // set of states Q
  var D = [t1, t2];                     // set of transitions D
  var F = [q1];                         // set of accept states F
  var D = new Dfa(Q, A, D, q0, F);      // resulting dfa

  describe('#delta', function () {
    it('produces an error on a transition with invalid symbol', function () {
      assert.throws(function () {
        D.delta(q0, 'c');
      }, Error);
    });

    it('produces a correct next state', function () {
      assert.deepEqual(D.delta(q0, 'a'), q1);
    });
  });

  describe('#deltaStar', function () {
    it('produces an error on a transition with invalid word', function () {
      assert.throws(function () {
        D.deltaStar(q1, 'c');
      }, Error);
    });

    it('produces a correct next state (reading 1-symbol word)', function () {
      assert.deepEqual(D.deltaStar(q0, 'a'), q1);
    });

    it('produces a correct next state (reading 2-symbol word)', function () {
      assert.deepEqual(D.deltaStar(q0, 'aa'), q0);
    });
  });

  // test #accepts
  /*
  describe('#accepts', function () {

  })
  */
});