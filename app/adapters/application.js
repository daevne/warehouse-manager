import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  findAll() {
    return [];
  }

  findRecord() {
    return null;
  }

  query() {
    return [];
  }
}
