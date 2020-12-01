import Observer from '../utils/observer';

export default class FlightsModel extends Observer {

  set(flights) {
    this._flights = flights;
  }

  get() {
    return this._flights;
  }
}
