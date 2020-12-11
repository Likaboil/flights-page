import Observer from '../utils/observer';

export default class FiltersModel extends Observer {
  constructor(filters) {
    super();
    this._filters = filters;
  }
}
