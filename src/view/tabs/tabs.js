import {Abstract} from '../abstract';

const createTabsTemplate = () => {
  return `
    <h2 class="visually-hidden">Фильтрация по скорости перелета</h2>
    <ul class="tabs">
      <li class="tabs__item tabs__item--cheaper tabs__item--active">
        <a class="tabs__text tabs__text--active"> Самый дешевый</a>
      </li>
      <li class="tabs__item tabs__item--faster">
        <a class="tabs__text"> Самый быстрый</a>
      </li>
    </ul`;
}

export default class CreateTabs extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createTabsTemplate();
  }
}