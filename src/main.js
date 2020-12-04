import 'normalize.css';
import './style.scss';

import {default as PagePresenter} from './presenters/page.js';
import {FILTERS, SORTING_FILTERS, UpdateType, ServerErrorMessage} from './const';
import {default as FlightsModel} from './models/flights';
import {default as Api} from './api/api';

const rootElement = document.querySelector(`#root`);
const FILTERS_MODEL = FILTERS;
const SORT_MODEL = SORTING_FILTERS;
const flightsModel = new FlightsModel();


Api.getFlights()
  .then((flights) => {
    flightsModel.set(UpdateType.INIT, flights);
  })
  .catch(() => {
    flightsModel.setError(UpdateType.ERROR, ServerErrorMessage);
  });

const pagePresenter = new PagePresenter(rootElement, flightsModel, FILTERS_MODEL, SORT_MODEL);
pagePresenter.init();
