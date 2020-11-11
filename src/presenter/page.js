import {PageView, HeaderView, LeftColumnView, RightColumnView, ContainerView, LogoView, FiltersView, TabsView, MessageView, FlightsListView, FlightsView, FlightsItemView, CardView} from '../view/index';
import {render, RenderPosition} from '../utils/dom';

export default class PagePresenter {
  constructor(container) {
    this._container = container;
    this._isLoading = true;
    this._pageView = new PageView();
    this._headerView = new HeaderView();
    this._leftColumnView = new LeftColumnView();
    this._rightColumnView = new RightColumnView();
    this._containerView = new ContainerView();
    this._logoView = new LogoView();
    this._filtersView = new FiltersView();
    this._tabsView = new TabsView();
    this._messageView = new MessageView();
    this._flightsView = new FlightsView();
    this._flightsListView = new FlightsListView();
  }

  init() {
    this._renderPage();
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
  }
}
