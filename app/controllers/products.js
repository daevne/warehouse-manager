import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductsController extends Controller {
  @tracked searchQuery = '';

  get filteredProducts() {
    let products = this.model?.products || [];
    let query = this.searchQuery.toLowerCase();

    return query
      ? products.filter((product) => product.name.toLowerCase().includes(query))
      : products;
  }

  @action
  updateSearchResults(query) {
    this.searchQuery = query;
  }
}
