import 'normalize.css';
import './style.scss';

import {default as PagePresenter} from './presenter/page.js';
import {generateFlights} from './mocks/flights-generator';
import {adaptFlightsToClient} from './adapter/flights';

const rootElement = document.querySelector(`#root`);
const FLIGHTS_MODEL = FLIGHTS;

const pagePresenter = new PagePresenter(rootElement, FLIGHTS_MODEL);
pagePresenter.init();
