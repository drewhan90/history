const tape = require('tape-catch');

tape('Verify /edit/admin route', { skip: false }, (describe) => {
  const lib = require('../lib');

  describe.test('* Placeholder', { skip: false }, (assert) => {
    assert.ok(lib);

    assert.end();
  });
});
