import {AbstractView} from '../index';

const createFlightsTemplate = () => {
  return `<div class="flights"></div>`;
};

export default class FlightsView extends AbstractView {

  getTemplate() {
    return createFlightsTemplate();
  }
}
