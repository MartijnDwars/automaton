var assert = require('assert'),
    Alphabet = require('../src/Alphabet.js');

describe('An alphabet', function () {
	it('cannot be initialized empty', function () {
    assert.throws(function () {
      new Alphabet();
    }, Error);
  });
});