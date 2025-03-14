import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WarehouseRoute extends Route {
  @service store;
  @service dataHandler;

  async model() {
    await this.dataHandler.loadData();

    return {
      positions: this.store.peekAll('position'),
      products: this.store.peekAll('product'),
    };
  }
}
