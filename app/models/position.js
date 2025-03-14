import Model, { attr, hasMany } from '@ember-data/model';

export default class PositionModel extends Model {
  @attr name;
  @hasMany('product', { async: false, inverse: 'position' }) products;
}
