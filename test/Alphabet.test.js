var assert = require('assert'),
    Alphabet = require('../src/Alphabet.js');

describe('An alphabet', function () {
	it('cannot be initialized empty', function () {
    assert.throws(function () {
      new Alphabet();
    }, Error);
  });

  it('can check whether it contains a symbol', function () {
    var a = new Alphabet(['a']);

    assert.strictEqual(a.contains('a'), true, 'Alphabet contains symbol a');
    assert.strictEqual(a.contains('b'), false, 'Alphabet does not contain symbol b');
  });
});