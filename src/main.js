import 'normalize.css';
import './style.scss';

import {default as PagePresenter} from './presenter/page.js';

const rootElement = document.querySelector(`#root`);
const FLIGHTS_MODEL = FLIGHTS;

const pagePresenter = new PagePresenter(rootElement, FLIGHTS_MODEL);
pagePresenter.init();
