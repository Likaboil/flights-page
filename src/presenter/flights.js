import {FlightsView, CardView, PageView} from '../view/index.js';
import {getElement, render, RenderPosition} from '../utils/dom.js';

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

  _renderFlights() {
    this._renderContainer(`.page__right-column`, this._flightsView, RenderPosition.BEFORE_END);
    this._renderCard();

  }
   _renderContainer(parentElement, elementView, position){
    const container = this._pageView.getContainer(parentElement);
    const element = getElement(elementView);
    render(container, element, position);
  }

  _renderCard() {
    const containers = document.querySelectorAll(`.flights__card`);

    for (const container of containers) {
      const cardView = new CardView();
      render(container, cardView, RenderPosition.BEFORE_END)
    }
  }
}
