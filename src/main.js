import 'normalize.css';
import './style.scss';

import {default as PagePresenter} from './presenter/page.js';
import {generateFlights} from './mocks/flights-generator';
import {adaptFlightsToClient} from './adapter/flights';

const rootElement = document.querySelector(`#root`);

const NEW_FLIGHTS = generateFlights(5);

const FLIGHTS_MODEL = FLIGHTS;

const newPage = new PagePresenter(rootElement, FLIGHTS_MODEL);
newPage.init();
