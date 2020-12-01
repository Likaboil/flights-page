import Observer from '../utils/observer';

export default class FlightsModel extends Observer {
  constructor() {
    super();
    this._flights = null;
  }

  set(flights) {
    this._flights = flights;
  }

  get() {
    return this._flights;
  }
}