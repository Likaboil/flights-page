import {AbstractView} from '../index';

const createPageTemplate = () => {
  return (
  `<main class="page__main">
    <h1 class="visually-hidden">Страница поиска рейсов</h1>
  </main>`);
}

const createHeaderTemplate = () => {
  return (`<header class="page__header"></header></div>`);
}

const createColumnTemplate = (position) => {
  return (`<div class="page__${position}-column"></div>`);
}


class HeaderView extends AbstractView {
  getTemplate() {
  return createHeaderTemplate();
  }
}

class LeftColumnView extends AbstractView {
  getTemplate() {
    return createColumnTemplate(left);
    }
}

class RightColumnView extends AbstractView {
  getTemplate() {
    return createColumnTemplate(right);
    }
}

export default class PageView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createPageTemplate();
  }

  getContainer(parentContainer) {
    return document.querySelector(parentContainer);
  }
}
