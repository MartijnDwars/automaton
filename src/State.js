/**
 * Represents a state.
 *
 * @constructor
 * @param {string} lbl The label of the state
 */
function State(lbl) {
  this.lbl = lbl;
}

/**
 * String representation of a state
 *
 * @returns {string} String representation
 */
State.prototype.toString = function () {
  return "[state "+this.l+"]";
};

module.exports = State;