import 'normalize.css';
import './style.scss';

import {default as Page} from './presenter/page.js';
import {FLIGHTS} from './mocks/flights';

const rootElement = document.querySelector(`#root`);
const FLIGHTS_MODEL = FLIGHTS;
const newPage = new Page(rootElement);

newPage.init();
