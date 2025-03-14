import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SearchComponent extends Component {
  @tracked searchQuery = '';

  @action
  updateQuery(event) {
    this.searchQuery = event.target.value;
    this.args.onSearch(this.searchQuery);
  }

  @action
  clearSearch() {
    this.updateQuery({ target: { value: '' } });
  }
}
