import {AbstractView} from '../index';

const createFlightsTemplate = () => {
  return (
    `<div class="flights">
      <ul class="flights__list">
        <li class="flights__card card"></li>
        <li class="flights__card card"></li>
        <li class="flights__card card"></li>
        <li class="flights__card card"></li>
      </ul>
    </div>`
    );
}

export default class FlightsView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createFlightsTemplate();
  }
}
