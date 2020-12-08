import {
  ContainerView,
  PageView,
  HeaderView,
  LogoView,
  LeftColumnView,
  RightColumnView,
  FiltersView,
  TabsView,
  MessageView,
  FlightsContainerView,
  FlightsListView,
  FlightsListItemView,
  CardFlightView
} from '../views/';

import {
  clearElement,
  render,
  RenderPosition
} from '../utils/dom';

import {
  LoadingMessage,
  UpdateType,
  ServerErrorMessage,
  SortType,
} from "../const";

export default class PagePresenter {
  constructor(container, flightsModel, filtersModel, sortModel) {
    this._container = container;
    this._flightsModel = flightsModel;
    this._filtersModel = filtersModel;
    this._sortModel = sortModel;
    this._isLoading = true;
    this._pageView = new PageView();
    this._headerView = new HeaderView();
    this._leftColumnView = new LeftColumnView();
    this._rightColumnView = new RightColumnView();
    this._containerView = new ContainerView();
    this._logoView = new LogoView();
    this._filtersView = new FiltersView(this._filtersModel);
    this._flightsContainerView = new FlightsContainerView();
    this._flightsListView = new FlightsListView();
    this._renderFlightsItem = this._renderFlightsItem.bind(this);
    this._renderFlightsList = this._renderFlightsList.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._currentSortType = SortType.SPEED;
  }

  init() {
    this._flightsModel.add(this._handleModelEvent);
    this._renderPage();
  }

  destroy() {
    this._flightsModel.remove(this._handleModelEvent);
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
    this._renderContent();
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

  _renderContent() {
    render(this._rightColumnView, this._flightsContainerView, RenderPosition.BEFORE_END);

    if (this._isLoading) {
      this._renderMessage(LoadingMessage.TITLE, LoadingMessage.TEXT);
      return;
    }

    this._renderFlightsList();
  }

  _clearContent() {
    this._remove(this._flightsListView);
    this._remove(this._messageView);
  }

  _renderFlightsList() {
    const flights = this._flightsModel.get();
    this._fragment = new DocumentFragment();

    flights.forEach(this._renderFlightsItem);

    render(this._flightsListView, this._fragment, RenderPosition.BEFORE_END);
    render(this._flightsContainerView, this._flightsListView, RenderPosition.BEFORE_END);

    this._fragment = null;
  }

  _renderFlightsItem(flight) {
    const flightsListItemView = new FlightsListItemView();
    const cardView = new CardFlightView(flight);

    render(flightsListItemView, cardView, RenderPosition.BEFORE_END);

    this._fragment.append(flightsListItemView.getElement());
  }

  _renderMessage(title, text) {
    this._messageView = new MessageView(title, text);
    render(this._rightColumnView, this._messageView, RenderPosition.BEFORE_END);
  }

  _updateContent() {
    this._clearContent();
    this._renderFlightsList();
  }

  _remove(element) {
    if (element) {
      clearElement(element);
      element = null;
    }
  }

  _handleModelEvent(updateType) {
    switch (updateType) {
      case UpdateType.INIT:
        this._isLoading = false;
        this._clearPage();
        this._renderPage();
        break;
      case UpdateType.ERROR:
        this._clearContent();
        this._renderMessage(ServerErrorMessage.title, ServerErrorMessage.text);
        break;
      case UpdateType.MINOR:
        this._updateContent();
        break;
    }
  }
}
