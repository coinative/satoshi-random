var sjcl = require('satoshi-sjcl');
var toBytes = sjcl.codec.bytes.fromBits;

exports.randomBytes = function (size) {
  var words = sjcl.random.randomWords(Math.ceil(size / 4));
  return new Buffer(toBytes(words).slice(0, size));
};
