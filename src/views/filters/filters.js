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
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }
}
