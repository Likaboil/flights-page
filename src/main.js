import 'normalize.css';
import './style.scss';

import {default as Page} from './presenter/page.js';

const rootElement = document.querySelector(`#root`);
const newPage = new Page(rootElement);

newPage.init();
