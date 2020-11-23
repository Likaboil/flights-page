import {AbstractView} from '../index';

const createColumnTemplate = (position) => {
  return `<div class="page__${position}-column"></div>`;
};

class LeftColumnView extends AbstractView {

  getTemplate() {
    return createColumnTemplate(`left`);
  }
}

class RightColumnView extends AbstractView {

  getTemplate() {
    return createColumnTemplate(`right`);
  }
}

export {LeftColumnView, RightColumnView};
