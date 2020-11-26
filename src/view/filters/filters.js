import {AbstractView} from '../index';

const createFiltersTemplate = () => {
  return (
    `<aside class="filters">
      <h2 class="visually-hidden">Фильтрация по количеству пересадок</h2>
      <form action="get" class="filters__form">
        <fieldset class="filters__list">
          <legend class="filters__title">Количество пересадок</legend>
          <div class="filters__wrapper">
            <input class="filters__input" type="checkbox" value="" id="check1" checked>
            <label class="filters__label" for="check1"> Все</label>
          </div>
          <div class="filters__wrapper">
            <input class="filters__input" type="checkbox" value="" id="check2">
            <label class="filters__label" for="check2"> Без пересадок</label>
          </div>
          <div class="filters__wrapper">
            <input class="filters__input" type="checkbox" value="" id="check3">
            <label class="filters__label" for="check3"> 1 пересадка</label>
          </div>
          <div class="filters__wrapper">
            <input class="filters__input" type="checkbox" value="" id="check4">
            <label class="filters__label" for="check4"> 2 пересадки</label>
          </div>
          <div class="filters__wrapper">
            <input class="filters__input" type="checkbox" value="" id="check5">
            <label class="filters__label" for="check5"> 3 пересадки</label>
          </div>
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
