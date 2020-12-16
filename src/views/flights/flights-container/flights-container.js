import {AbstractView} from '../../index';

const createFlightsContainerTemplate = () => {
  return `<div class="flights"></div>`;
};

export default class FlightsContainerView extends AbstractView {

  getTemplate() {
    return createFlightsContainerTemplate();
  }
}
