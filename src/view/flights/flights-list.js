import {AbstractView} from '../index';

const createFlightsItem = () => {
  return `<li class="flights__card card"></li>`;
};

const createFlightsList = () => {
  return `<ul class="flights__list"></ul>`;
};

export class FlightsItemView extends AbstractView {
  getTemplate() {
    return createFlightsItem();
  }
}

export default class FlightsListView extends AbstractView {
  getTemplate() {
    return createFlightsList();
  }
}
