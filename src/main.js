import 'normalize.css';
import './style.scss';

import {
  FILTERS,
  UpdateType,
  ServerErrorMessage,
} from './const';

import {
  FlightsModel,
  FiltersModel,
} from './models/index';

import {default as Api} from './api/api';
import {PagePresenter} from './presenters/index';

const rootElement = document.querySelector(`#root`);

const filtersModel = new FiltersModel();
const flightsModel = new FlightsModel();

filtersModel.set(UpdateType.MINOR, FILTERS);

// получение данных с задержкой(имитация сервера)
Api.getFlights()
  .then((flights) => {
    flightsModel.set(UpdateType.INIT, flights);
  })
  .catch(() => {
    // отслеживание возможных ошибок при получении данных от сервера
    flightsModel.setError(UpdateType.ERROR, ServerErrorMessage);
  });

const pagePresenter = new PagePresenter(rootElement, flightsModel, filtersModel);
pagePresenter.init();
