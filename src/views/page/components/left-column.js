import {AbstractView} from '../../index';

const createColumnTemplate = () => {
  return `<div class="page__left-column"></div>`;
};

export default class LeftColumnView extends AbstractView {

  getTemplate() {
    return createColumnTemplate();
  }
}
