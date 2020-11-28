import {AbstractView} from '../index';

const createTabsTemplate = (sortingFilters) => {
  return (
    `<div>
      <h2 class="visually-hidden">${sortingFilters.headerTitle}</h2>
      <ul class="tabs">
        ${sortingFilters.items.map((filter) => {
      const type = filter.type;
      const value = filter.value;
      return (
        `<li class="tabs__item tabs__item--${type}">
          <a class="tabs__text">${value}</a>
        </li>`
      );
    }).join(``)
    }
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
