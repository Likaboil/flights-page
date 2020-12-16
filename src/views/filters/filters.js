import {AbstractView} from '../index';

const createFiltersTemplate = (filters) => {
  return (
    `<aside class="filters">
      <h2 class="visually-hidden">${filters.headerTitle}</h2>
      <form action="get" class="filters__form">
        <fieldset class="filters__list">
          <legend class="filters__title">${filters.title}</legend>
          ${filters.items.map((filter, index) => {
      const id = ++index;
      const {isChecked, value} = filter;
      return (
        `<div class="filters__wrapper">
          <input class="filters__input" type="checkbox" value="${value}" id="check${id}"
          ${isChecked ? `checked` : ``}>
          <label class="filters__label" for="check${id}">${value}</label>
        </div>`
      );
    }).join(``)
    }
        </fieldset>
      </form>
    </aside>`
  );
};

export default class FiltersView extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }

  // установка обработчика событий, callback передает value фильтра
  setChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._filterTypeChangeHandler);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }
}
