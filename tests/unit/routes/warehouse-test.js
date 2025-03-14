import { module, test } from 'qunit';
import { setupTest } from 'warehouse-manager/tests/helpers';

module('Unit | Route | warehouse', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:warehouse');
    assert.ok(route);
  });
});
