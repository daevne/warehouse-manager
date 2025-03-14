import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PositionComponent extends Component {
  @service store;
  @service dataHandler;
  @tracked products = [];

  get position() {
    return this.args.position;
  }

  constructor() {
    super(...arguments);
    this.products = this.position.products;
  }

  @action
  startDrag(product, event) {
    event.dataTransfer.setData(
      'application/json',
      JSON.stringify({ id: product.id }),
    );
  }

  @action
  allowDrop(event) {
    event.preventDefault();
  }

  @action
  dropProduct(positionId, event) {
    event.preventDefault();
    let productData = event.dataTransfer.getData('application/json');
    let parsedData = JSON.parse(productData);

    if (parsedData && parsedData.id) {
      let product = this.store.peekRecord('product', parsedData.id);

      if (product) {
        this.dataHandler.updateProductPosition(product, positionId);
      }
    }

    this.args.onProductDrop();
  }
}
