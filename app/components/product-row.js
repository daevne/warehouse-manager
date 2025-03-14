import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductRowComponent extends Component {
  @service store;
  @service dataHandler;

  get currentPositionName() {
    return (
      this.dataHandler.productPositions[this.args.product.id] ||
      this.args.product.positionId
    );
  }

  @action
  updateProductPosition(event) {
    let newPositionId = event.target.value;

    this.dataHandler.updateProductPosition(this.args.product, newPositionId);
  }
}
