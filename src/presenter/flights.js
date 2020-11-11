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
    const containers = document.querySelectorAll(`.flights__card`);

    for (const container of containers) {
      const cardView = new CardView();
      render(container, cardView, RenderPosition.BEFORE_END)
    }
  }
}
