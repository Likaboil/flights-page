import {AbstractView} from '../index';

const ACTIVE_TAB_ITEM_CLASS = `tabs__item--active`;
const ACTIVE_TAB_TEXT_CLASS = `tabs__text--active`;

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
        ${type === defaultSortType ? ACTIVE_TAB_ITEM_CLASS : `` }"
        type="${type}">
          <a href='#' class="tabs__text
        ${type === defaultSortType ? ACTIVE_TAB_TEXT_CLASS : ``}"
        type="${type}" >${value}</a>
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
    this._sortChangeHandler = this._sortChangeHandler.bind(this);
  }

  getTemplate() {
    return createTabsTemplate(this._sortingFilters, this._sortType);
  }

  setChangeHandler(callback) {
    this._callback.sortChangeHandler = callback;
    this.getElement().addEventListener(`click`, this._sortChangeHandler);
  }

  _sortChangeHandler(evt) {
    evt.preventDefault();
    this._callback.sortChangeHandler(evt.target.type);
  }
}
