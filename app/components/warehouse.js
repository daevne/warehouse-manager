import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class WarehouseComponent extends Component {
  @service store;

  @tracked positions = [];

  constructor() {
    super(...arguments);
    this.positions = this.args.model.positions;
  }
}
