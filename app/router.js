import EmberRouter from '@ember/routing/router';
import config from 'warehouse-manager/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('warehouse', { path: '/' });
  this.route('products', { path: '/product-list' });
});
