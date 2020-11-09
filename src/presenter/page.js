import {PageView, ContainerView, LogoView, FiltersView, TabsView, MessageView} from '../view/index';

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
  }
}
