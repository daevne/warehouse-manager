import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DataHandlerService extends Service {
  @service store;
  @tracked productPositions = {};

  async loadData() {
    try {
      let storedProductPositions = this.getStoredProductPositions();

      let data = await this.fetchData('/data/mock-data.json');

      this.productPositions = storedProductPositions
        ? JSON.parse(storedProductPositions)
        : this.initializeProductPositions(data.products);

      this.pushPositionsToStore(data.positions);
      this.pushProductsToStore(data.products);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  getStoredProductPositions() {
    return localStorage.getItem('productPositions');
  }

  async fetchData(url) {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
  }

  initializeProductPositions(products) {
    return products.reduce((acc, product) => {
      acc[product.id] = product.positionId || null;
      return acc;
    }, {});
  }

  pushPositionsToStore(positions) {
    this.store.push({
      data: positions.map((position) => ({
        id: position.id,
        type: 'position',
        attributes: {
          name: position.name,
        },
      })),
    });
  }

  pushProductsToStore(products) {
    this.store.push({
      data: products.map((product) => ({
        id: product.id,
        type: 'product',
        attributes: {
          name: product.name,
        },
        relationships: {
          position: {
            data: this.productPositions[product.id]
              ? { id: this.productPositions[product.id], type: 'position' }
              : null,
          },
        },
      })),
    });
  }

  updateProductPosition(product, newPositionId) {
    let newPosition = this.store.peekRecord('position', newPositionId);

    if (newPosition) {
      product.position = newPosition;
      this.productPositions[product.id] = newPositionId;
      this.saveData();
    }
  }

  saveData() {
    localStorage.setItem(
      'productPositions',
      JSON.stringify(this.productPositions),
    );
  }
}
