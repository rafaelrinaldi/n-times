'use strict';

function times(n, fn) {
  var i = 0;
  var args = Array.prototype.slice.call(arguments, 2);

  for (; i < n; ++i) {
    fn.apply(fn, args.concat(i));
  }
}

module.exports = times;
