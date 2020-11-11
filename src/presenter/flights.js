import {FlightsView, CardView, FlightsListView, FlightsItemView} from '../view/index.js';
import {render, RenderPosition} from '../utils/dom.js';

export default class FlightsPresenter {
  constructor(container) {
    this._container = container;
    this._isLoading = true;
    this._flightsView = new FlightsView();
    this._flightsListView = new FlightsListView();
  }

  init() {
    this._renderFlights();
  }

  _renderFlights() {
    render(this._container, this._flightsView, RenderPosition.BEFORE_END);
    this._renderCard();
  }

  _renderCard() {
    render(this._flightsView, this._flightsListView, RenderPosition.BEFORE_END)

    for (let i = 0; i <= 4; i++) {
      const flightsItemView = new FlightsItemView();
      const cardView = new CardView();

      render(this._flightsListView, flightsItemView, RenderPosition.BEFORE_END);
      render(flightsItemView, cardView, RenderPosition.BEFORE_END);
    }
  }
}
