import { module, test } from 'qunit';
import { setupTest } from 'warehouse-manager/tests/helpers';

module('Unit | Service | data-handler', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:data-handler');
    assert.ok(service);
  });
});
