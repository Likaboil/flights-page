import {PageView, ContainerView, LogoView, FiltersView, TabsView, FlightsView } from '../view/index';
import {clearElement} from '../utils/dom';
import {default as Flights} from './flights';

const FlightsPres = new Flights();

export default class PagePresenter {
  constructor(container) {
    this._container = container;
    this._isLoading = true;
    this._pageView = new PageView();
    this._containerView = new ContainerView();
    this._logoView = new LogoView();
    this._filtersView = new FiltersView();
    this._tabsView = new TabsView();
    this._flightsView = new FlightsView();
  }

  init() {
    this._renderPage();
    FlightsPres.init();
  }

  destroy() {
    clearElement(element);
  }

  _renderPage() {
    this._renderContainer();
    this._pageView.setPageContainer(this._pageView);
    this._renderLogo();
    this._renderFilters();
    this._renderTabs();
  }

  _renderContainer(){
    this._pageView.setFirstContainer(this._containerView);
  }

  _renderSecondContainer() {
    this._pageView.setSecondContainer(this._containerView)
  }

  _renderLogo() {
    this._pageView.setLogo(this._logoView);

  }

  _renderFilters() {
    this._pageView.setLeftColumn(this._filtersView);
  }

  _renderTabs() {
    this._pageView.setRightColumn(this._tabsView);
  }


  // _update() {
  // }
}
