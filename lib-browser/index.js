var sjcl = require('satoshi-sjcl');
var toBytes = sjcl.codec.bytes.fromBits;

function wrap(fn) {
  return function (size) {
    size = size / 4;
    return new Buffer(toBytes(fn.call(sjcl.random, size)));
  }
};

exports.randomBytes = wrap(sjcl.random.randomWords);
