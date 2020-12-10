import {AbstractView} from '../index';

const ActiveTabClass = {
  ITEM: `tabs__item--active`,
  TEXT: `tabs__text--active`,
};

const createTabsTemplate = (sortFilters, defaultSortType) => {
  return (
    `<div>
      <h2 class="visually-hidden">${sortFilters.headerTitle}</h2>
      <ul class="tabs">
        ${sortFilters.items.map((filter) => {
      const {type, value} = filter;

      return (
        `<li class="tabs__item tabs__item--${type}
        ${type === defaultSortType ? ActiveTabClass.ITEM : `` }"
        type="${type}">
          <a href='#' class="tabs__text
        ${type === defaultSortType ? ActiveTabClass.TEXT : ``}"
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
  constructor(sortFilters, sortType) {
    super();
    this._sortFilters = sortFilters;
    this._sortType = sortType;
    this._sortChangeHandler = this._sortChangeHandler.bind(this);
  }

  getTemplate() {
    return createTabsTemplate(this._sortFilters, this._sortType);
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
