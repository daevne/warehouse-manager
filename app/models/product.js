import Model, { attr, belongsTo } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @belongsTo('position', { async: false, inverse: 'products' }) position;
}
