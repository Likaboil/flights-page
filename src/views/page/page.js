import {AbstractView} from '../index';

const createPageTemplate = () => {
  return (
    `<main class="page__main">
      <h1 class="visually-hidden">Страница поиска рейсов</h1>
    </main>`
  );
};

export default class PageView extends AbstractView {

  getTemplate() {
    return createPageTemplate();
  }
}
