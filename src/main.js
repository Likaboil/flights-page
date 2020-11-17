import 'normalize.css';
import './style.scss';

import {default as Page} from './presenter/page.js';
import {FLIGHTS} from './const';

const rootElement = document.querySelector(`#root`);
const FlightsModel = FLIGHTS;
const newPage = new Page(rootElement, FlightsModel);

newPage.init();
