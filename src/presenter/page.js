import {PageView, HeaderView, LeftColumnView, RightColumnView, ContainerView, LogoView, FiltersView, TabsView, MessageView, FlightsListView, FlightsView, FlightsItemView, CardView} from '../view/index';
import {clearElement, render, RenderPosition} from '../utils/dom';
import {MESSAGE} from "../const";

export default class PagePresenter {
  constructor(container, flightsModel) {
    this._container = container;
    this._flightsModel = flightsModel;
    this._isLoading = false;
    this._pageView = new PageView();
    this._headerView = new HeaderView();
    this._leftColumnView = new LeftColumnView();
    this._rightColumnView = new RightColumnView();
    this._containerView = new ContainerView();
    this._logoView = new LogoView();
    this._filtersView = new FiltersView();
    this._tabsView = new TabsView();
    this._flightsView = new FlightsView();
    this._flightsListView = new FlightsListView();
  }

  init() {
    this._renderPage();
  }

  destroy() {
    this._clearPage();
  }

  _renderPage() {
    render(this._container, this._containerView, RenderPosition.BEFORE_END);
    render(this._containerView, this._pageView, RenderPosition.BEFORE_END);
    render(this._pageView, this._headerView, RenderPosition.BEFORE_BEGIN);
    render(this._headerView, this._logoView, RenderPosition.BEFORE_END);
    render(this._pageView, this._leftColumnView, RenderPosition.BEFORE_END);
    render(this._leftColumnView, this._filtersView, RenderPosition.BEFORE_END);
    render(this._pageView, this._rightColumnView, RenderPosition.BEFORE_END);
    render(this._rightColumnView, this._tabsView, RenderPosition.BEFORE_END);
    this._renderContent();
  }

  _renderContent() {
    render(this._rightColumnView, this._flightsView, RenderPosition.BEFORE_END);

    if (this._isLoading) {
      this._renderMessage(MESSAGE.LOADING.TITLE, MESSAGE.LOADING.TEXT);
      return;
    }

    this._renderCardsList();
  }

  _renderFlightsList() {
    const flights = this._flightsModel;
    flights.forEach(this._renderFlightsItem);

    render(this._flightsView, this._flightsListView, RenderPosition.BEFORE_END);
  }

  _renderFlightsItem(flight) {
    const flightsItemView = new FlightsItemView();
    const cardView = new CardView(flight);

    render(flightsItemView, cardView, RenderPosition.BEFORE_END);
  }

  _renderMessage(title = ``, text = ``) {
    this._messageView = new MessageView(title, text);
    render(this._rightColumnView, this._messageView, RenderPosition.BEFORE_END);
  }

  _clearPage() {
    this._clearContent();
    this._remove(this._tabsView);
    this._remove(this._rightColumnView);
    this._remove(this._filtersView);
    this._remove(this._leftColumnView);
    this._remove(this._logoView);
    this._remove(this._headerView);
    this._remove(this._pageView);
    this._remove(this._containerView);
  }

  _clearContent() {
    this._remove(this._flightsListView);
    this._remove(this._messageView);
  }

  _updateContent() {
    this._clearContent();
    this._renderCardsList();
  }

  _remove(element) {
    if (element) {
      clearElement(element);
      element = null;
    }
  }
}
