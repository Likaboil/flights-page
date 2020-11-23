import {AbstractView} from '../index';

const createPageTemplate = () => {
  return (
    `<main class="page__main">
      <h1 class="visually-hidden">Страница поиска рейсов</h1>
    </main>`
  );
};

const createHeaderTemplate = () => {
  return `<header class="page__header"></header></div>`;
};

export class HeaderView extends AbstractView {

  getTemplate() {
    return createHeaderTemplate();
  }
}

export default class PageView extends AbstractView {

  getTemplate() {
    return createPageTemplate();
  }
}
