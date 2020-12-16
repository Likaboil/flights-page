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
} from '../../views';

import {
  clearElement,
  render,
  RenderPosition
} from '../../utils/dom';

import {
  LoadingMessage,
  UpdateType,
  ServerErrorMessage,
  SortType,
  SortFilter,
  NoFlightsMessage,
} from "../../const";

import {
  filterFlights,
  sortFlights,
} from '../../utils/flights';

export default class PagePresenter {
  constructor(container, flightsModel, filtersModel) {
    // необходимые свойства для работы презентора
    this._container = container;
    this._flightsModel = flightsModel;
    this._filtersModel = filtersModel;
    this._pageView = new PageView();
    this._headerView = new HeaderView();
    this._leftColumnView = new LeftColumnView();
    this._rightColumnView = new RightColumnView();
    this._containerView = new ContainerView();
    this._logoView = new LogoView();
    this._flightsContainerView = new FlightsContainerView();

    // необходимые методы с привязкой к контексту
    this._renderFlightsItem = this._renderFlightsItem.bind(this);
    this._renderFlightsList = this._renderFlightsList.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._sortChangeHandler = this._sortChangeHandler.bind(this);
    this._filterChangeHandler = this._filterChangeHandler.bind(this);

    // свойства по умолчанию
    this._currentSortType = SortType.PRICE;
    this._isLoading = true;
  }

  init() {
    // добавление обзерверов
    this._flightsModel.add(this._handleModelEvent);
    this._filtersModel.add(this._handleModelEvent);

    this._renderPage();
  }

  destroy() {
    // удаление обзерверов
    this._flightsModel.remove(this._handleModelEvent);
    this._filtersModel.remove(this._handleModelEvent);

    this._clearPage();
  }

  _renderPage() {
    render(this._container, this._containerView, RenderPosition.BEFORE_END);
    render(this._containerView, this._pageView, RenderPosition.BEFORE_END);
    render(this._pageView, this._headerView, RenderPosition.BEFORE_BEGIN);
    render(this._headerView, this._logoView, RenderPosition.BEFORE_END);
    render(this._pageView, this._leftColumnView, RenderPosition.BEFORE_END);
    this._renderFilters();
    render(this._pageView, this._rightColumnView, RenderPosition.BEFORE_END);
    this._renderSort();
    this._renderContent();
  }

  _clearPage() {
    this._clearContent();
    this._clearSort();
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

    // проверка на состояние загрузки страницы
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

  _getflights() {
    const filteredFlights = filterFlights(this._flightsModel.get(), this._filters);
    return sortFlights(filteredFlights, this._currentSortType);
  }

  _renderFlightsList() {
    // при рендере используются данные, прошедшие фильтрацию и сортировку
    const flights = this._getflights();
    if (flights.length === 0) {
      this._renderMessage(NoFlightsMessage.TITLE, NoFlightsMessage.TEXT);
    }

    // _fragment - для добавления карточек в рендер списка карточек
    this._fragment = new DocumentFragment();
    this._flightsListView = new FlightsListView();

    flights.forEach(this._renderFlightsItem);

    render(this._flightsListView, this._fragment, RenderPosition.BEFORE_END);
    render(this._flightsContainerView, this._flightsListView, RenderPosition.BEFORE_END);

    // после каждого рендера списка _fragment очищается, чтобы не хранить в себе старые данные
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

  _sortChangeHandler(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }
    this._currentSortType = sortType;
    this._clearSort();
    this._renderSort();
    this._updateContent();
  }

  _renderSort() {
    this._tabsView = new TabsView(SortFilter, this._currentSortType);
    render(this._rightColumnView, this._tabsView, RenderPosition.AFTER_BEGIN);

    // установка callback на изменение, передается обработчиком событий во view
    this._tabsView.setChangeHandler(this._sortChangeHandler);
  }

  _clearSort() {
    this._remove(this._tabsView);
  }

  _filterChangeHandler(value) {
    const index = this._filters.indexOf(value);
    if (index !== -1) {
      this._filters.splice(index, 1);
    } else {
      this._filters.push(value);
    }
    this._filtersModel.set(UpdateType.MINOR, this._filters);
  }

  _renderFilters() {
    this._filtersView = new FiltersView(this._filtersModel.get());
    render(this._leftColumnView, this._filtersView, RenderPosition.BEFORE_END);

    // установка callback на изменение, передается обработчиком событий во view
    this._filtersView.setChangeHandler(this._filterChangeHandler);
    this._filters = [];
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
    // следит за состоянием моделей
    switch (updateType) {
      case UpdateType.INIT:
        this._isLoading = false;
        this._clearPage();
        this._renderPage();
        break;
      case UpdateType.ERROR:
        this._clearContent();
        this._renderMessage(ServerErrorMessage.TITLE, ServerErrorMessage.TEXT);
        break;
      case UpdateType.MINOR:
        this._updateContent();
        break;
    }
  }
}
