import {AbstractView} from '../../index';

const createHeaderTemplate = () => {
  return `<header class="page__header"></header></div>`;
};

export default class HeaderView extends AbstractView {

  getTemplate() {
    return createHeaderTemplate();
  }
}
