import {AbstractView} from '../../index';

const createFlightsList = () => {
  return `<ul class="flights__list"></ul>`;
};

export default class FlightsListView extends AbstractView {
  getTemplate() {
    return createFlightsList();
  }
}
