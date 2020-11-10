import {PageView, HeaderView, LeftColumnView, RightColumnView, ContainerView, LogoView, FiltersView, TabsView, MessageView} from '../view/index';
import {getElement, render, RenderPosition} from '../utils/dom';
import FlightsPresenter from './flights';

export default class PagePresenter {
  constructor(container) {
    this._container = container;
    this._isLoading = true;
    this._pageView = new PageView();
    this._containerView = new ContainerView();
    this._logoView = new LogoView();
    this._filtersView = new FiltersView();
    this._tabsView = new TabsView();
    this._messageView = new MessageView();
    this._flightsPresenter = new FlightsPresenter
  }

  init() {
    this._renderPage();
    this._flightsPresenter.init();

  }

  _renderPage() {
    this._renderContainer(`#root`, this._containerView, RenderPosition.BEFORE_END);
    this._renderContainer(`.container`, this._pageView, RenderPosition.BEFORE_END);
    this._renderContainer(`.page__header`, this._logoView, RenderPosition.BEFORE_END);
    this._renderContainer(`.page__left-column`, this._filtersView, RenderPosition.BEFORE_END);
    this._renderContainer(`.page__right-column`, this._tabsView, RenderPosition.BEFORE_END);
  }

  _renderContainer(parentElement, elementView, position){
    const container = this._pageView.getContainer(parentElement);
    const element = getElement(elementView);
    render(container, element, position);
  }
}
