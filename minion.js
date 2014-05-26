
/**
 * Module dependencies.
 */

var Base = require('mocha/lib/reporters/base');

/**
 * Expose `Minion`.
 */

exports = module.exports = Minion;

/**
 * Initialize a new `Minion` minimal test reporter (best used with --watch).
 *
 * @param {Runner} runner
 * @api public
 */

function Minion(runner) {
  Base.call(this, runner);

  runner.on('start', function(){
    // clear screen
    process.stdout.write('\u001b[2J\n');
  });

  runner.on('end', this.epilogue.bind(this));
}

/**
 * Inherit from `Base.prototype`.
 */

Minion.prototype.__proto__ = Base.prototype;
