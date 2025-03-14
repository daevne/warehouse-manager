import { module, test } from 'qunit';
import { setupRenderingTest } from 'warehouse-manager/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ProductRow />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ProductRow>
        template block text
      </ProductRow>
    `);

    assert.dom().hasText('template block text');
  });
});
