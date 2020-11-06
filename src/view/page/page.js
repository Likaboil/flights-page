import {AbstractView} from '../index';
import {render, getElement, RenderPosition} from '../../utils/dom';

const createPageTemplate = () => {
  return `<div>
      <header class="page__header"></header>
      <main class="page__main">
        <h1 class="visually-hidden">Страница поиска рейсов</h1>
        <div class="page__left-column"></div>
        <div class="page__right-column"></div>
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

  setFirstContainer(centerContainer){
    this.getElement();
    const container = document.querySelector('#root');
    const element = getElement(centerContainer);
    render(container, element, RenderPosition.BEFORE_END);
  }

  setPageContainer(page) {
    this.getElement();
    const container = document.querySelector('.container');
    const element = getElement(page);
    render(container, element,RenderPosition.BEFORE_END);
  }

  setLogo(logo) {
    this.getElement();
    const container = document.querySelector('.page__header');
    const element = getElement(logo);
    render(container, element, RenderPosition.BEFORE_END);
  }

  setLeftColumn(leftColumn) {
    this.getElement();
    const container = document.querySelector('.page__left-column');
    const element = getElement(leftColumn);
    render(container, element, RenderPosition.BEFORE_END);
  }

  setRightColumn(rightColumn) {
    this.getElement();
    const container = document.querySelector('.page__right-column');
    const element = getElement(rightColumn);
    render(container, element, RenderPosition.BEFORE_END);
  }
}
