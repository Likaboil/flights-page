import {AbstractView} from '../index';

const createFlightsTemplate = () => {
  return (
    `<div class="flights">
    </div>`
    );
}

const createFlightsList = () => {
  return (`<ul class="flights__list"></ul>`);
}

const createFlightsItem = () => {
  return (`<li class="flights__card card"></li>`);
}

class FlightsListView extends AbstractView {
  getTemplate() {
    return createFlightsList();
  }
}

class FlightsItemView extends AbstractView {
  getTemplate() {
    return createFlightsItem();
  }
}

export default class FlightsView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createFlightsTemplate();
  }
}

export {
  FlightsListView, FlightsItemView
};
