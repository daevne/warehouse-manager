import { module, test } from 'qunit';
import { setupTest } from 'warehouse-manager/tests/helpers';

module('Unit | Controller | products', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:products');
    assert.ok(controller);
  });
});
