import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProductsRoute extends Route {
  @service store;
  @service dataHandler;

  async model() {
    await this.dataHandler.loadData();

    let products = this.store.peekAll('product');
    let positions = this.store.peekAll('position');

    return { products, positions };
  }
}
