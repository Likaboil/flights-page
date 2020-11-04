import {Abstract} from '../abstract';

const createPageContainerTemplate = () => {
  return `
    <header class="page__header">
    </header>
    <main class="page__main">
      <h1 class="visually-hidden">Страница поиска рейсов</h1>
      <div class="page__left-column">
      </div>
      <div class="page__right-column">
      </div>
    </main>`;
}

export default class CreatePageContainer extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createPageContainerTemplate();
  }
}
