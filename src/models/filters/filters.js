import Observer from '../../utils/observer';

export default class FiltersModel extends Observer {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  set(updateType, filters) {
    this._filters = filters;
    this._notify(updateType, filters);
  }

  get() {
    return this._filters;
  }
}
