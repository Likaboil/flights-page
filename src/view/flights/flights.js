import {Abstract} from '../../abstract';

const createFlightsTemplate = () => {
  return `
  <div class="flights">
  </div>`;
}

export default class CreateFlights extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createFlightsTemplate();
  }
}
