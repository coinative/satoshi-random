var random = require('../');

describe('satoshi-random', function () {
  it('should return a Buffer', function () {
    expect(random.randomBytes(4) instanceof Buffer)
  });

  it('should be correct length', function () {
    for (var i = 0; i < 100; i++) {
      expect(random.randomBytes(i)).to.have.length(i);
    }
  });
});
