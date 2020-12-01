import {AbstractView} from '../../index';

const createFlightsListItem = () => {
  return `<li class="flights__card card"></li>`;
};

export default class FlightsListItemView extends AbstractView {
  getTemplate() {
    return createFlightsListItem();
  }
}
