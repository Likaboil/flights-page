import {PageView, FlightsView, CardView, MessageView } from '../view/index.js';
import { getElement, render, _root} from '../utils/dom.js';

export default class FlightsPresenter {
  constructor(container) {
    this._container = container;
    this._isLoading = true;
    this._flightsView = new FlightsView();
    this._cardView = new CardView();
  }

  init() {
    this._renderFlights();
  }

  _renderFlights() {
    this._flightsView.setFlightContainer(this._flightsView);
    this._renderCard();
  }

  _renderCard() {
    this._flightsView.getCard(this._cardView);
  }
}
