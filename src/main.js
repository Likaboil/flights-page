import 'normalize.css';
import './style.scss';

import {default as PagePresenter} from './presenter/page.js';
import {FLIGHTS} from './mocks/flights';
import {generateFlights} from './mocks/flights-generator';
import {adaptFlightsToClient} from './adapter/flights';


const rootElement = document.querySelector(`#root`);
const FLIGHTS_MODEL = FLIGHTS;


const newPage = new PagePresenter(rootElement, FLIGHTS_MODEL);
newPage.init();
