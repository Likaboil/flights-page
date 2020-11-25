import {AbstractView} from '../../index';

const createColumnTemplate = () => {
  return `<div class="page__right-column"></div>`;
};

export default class RightColumnView extends AbstractView {

  getTemplate() {
    return createColumnTemplate();
  }
}
