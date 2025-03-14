import { setupTest } from 'warehouse-manager/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | position', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('position', {});
    assert.ok(model, 'model exists');
  });
});
