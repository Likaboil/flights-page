import {AbstractView} from '../index';

const createTabsTemplate = (sortingFilters) => {
  return (
    `<div>
      <h2 class="visually-hidden">${sortingFilters.headerTitle}</h2>
      <ul class="tabs">
        <li class="tabs__item tabs__item--cheaper tabs__item--active">
          <a class="tabs__text tabs__text--active"> Самый дешевый</a>
        </li>
        <li class="tabs__item tabs__item--faster">
          <a class="tabs__text"> Самый быстрый</a>
        </li>
      </ul
    </div>`
  );
};

export default class TabsView extends AbstractView {
  constructor(sortingFilters) {
    super();
    this._sortingFilters = sortingFilters;
  }

  getTemplate() {
    return createTabsTemplate(this._sortingFilters);
  }
}
