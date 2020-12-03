import Observer from '../utils/observer';

export default class FlightsModel extends Observer {
  constructor() {
    super();
    this._flights = null;
  }

  set(updateType, flights) {
    this._flights = flights;
    this._notify(updateType);
  }

  get() {
    return this._flights;
  }
}
