import {AbstractView} from '../index';

const createPageTemplate = () => {
  return `<div>
    <header class="page__header">
    </header>
    <main class="page__main">
      <h1 class="visually-hidden">Страница поиска рейсов</h1>
      <div class="page__left-column">
      </div>
      <div class="page__right-column">
      </div>
    </main>
  </div>`;
}

export default class CreatePage extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createPageTemplate();
  }
}
