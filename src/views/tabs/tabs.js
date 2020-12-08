import {AbstractView} from '../index';

const createTabsTemplate = (sortingFilters, defaultSortType) => {
  return (
    `<div>
      <h2 class="visually-hidden">${sortingFilters.headerTitle}</h2>
      <ul class="tabs">
        ${sortingFilters.items.map((filter) => {
      const type = filter.type;
      const value = filter.value;
      return (
        `<li class="tabs__item tabs__item--${type}
        ${type === defaultSortType ? `tabs__item--active` : `` }">
          <a class="tabs__text
        ${type === defaultSortType ? `tabs__text--active` : ``}">${value}</a>
        </li>`
      );
    }).join(``)
    }
      </ul
    </div>`
  );
};

export default class TabsView extends AbstractView {
  constructor(sortingFilters, sortType) {
    super();
    this._sortingFilters = sortingFilters;
    this._sortType = sortType;
  }

  getTemplate() {
    return createTabsTemplate(this._sortingFilters, this._sortType);
  }
}
