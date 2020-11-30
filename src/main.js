import 'normalize.css';
import './style.scss';

import {default as PagePresenter} from './presenter/page.js';
import {generateFlights} from './mocks/flights-generator';
import {adaptFlightsToClient} from './adapter/flights';
import {FILTERS, SORTING_FILTERS} from './const';

const rootElement = document.querySelector(`#root`);
const FLIGHTS_MODEL = adaptFlightsToClient(generateFlights(5));
const FILTERS_MODEL = FILTERS;
const SORT_MODEL = SORTING_FILTERS;
const pagePresenter = new PagePresenter(rootElement, FLIGHTS_MODEL, FILTERS_MODEL, SORT_MODEL);
pagePresenter.init();
