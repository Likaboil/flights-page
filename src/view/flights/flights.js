import {AbstractView} from '../index';
import {render, getElement, RenderPosition} from '../../utils/dom';

const createFlightsTemplate = () => {
  return `<div class="flights">
    <ul class="flights__list">
      <li class="flights__card card"></li>
      <li class="flights__card card"></li>
      <li class="flights__card card"></li>
      <li class="flights__card card"></li>
  </div>`;
}

export default class CreateFlights extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createFlightsTemplate();
  }

  setFlightContainer(flightContainer){
    this.getElement();
    const container = document.querySelector('.page__right-column');
    const element = getElement(flightContainer);
    render(container, element, RenderPosition.BEFORE_END)
  }

  getCard(card) {
    this.getElement();
    const element = getElement(card);

    const flightsRender = (item) => {
      item.append(element);
    }
    const cardsList = Array.from(document.querySelectorAll('.flights__card'))
    cardsList.forEach(flightsRender);


  }
}
