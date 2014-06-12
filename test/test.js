var random = require('../');

describe('satoshi-random', function () {
  it('randomBytes', function () {
    expect(random.randomBytes(8) instanceof Buffer)
    expect(random.randomBytes(8).length).to.equal(8);
  });
});
