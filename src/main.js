import 'normalize.css';
import './style.scss';

import {default as Page} from './presenter/page.js';

const newPage = new Page();

newPage.init();
