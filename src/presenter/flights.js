import {FlightsView, CardView, PageView} from '../view/index.js';

export default class FlightsPresenter {
  constructor(container) {
    this._container = container;
    this._isLoading = true;
    this._flightsView = new FlightsView();
    this._cardView = new CardView();
    this._pageView = new PageView();
  }

  init() {
    this._renderFlights();
  }
}
