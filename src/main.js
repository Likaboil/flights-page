import 'normalize.css';
import './style.scss';

import {default as Page} from './presenter/page.js';
import {FLIGHTS} from './mocks/flights';
import {getFormatDateToHHMM, getFlightDuration} from './utils/date';
import {splitPrice, getTransferAmount} from './utils/utils';

const rootElement = document.querySelector(`#root`);
const FLIGHTS_MODEL = FLIGHTS;


for (let a of FLIGHTS_MODEL) {

  a.price = splitPrice(a.price);
  a.directFlight.flightDuration = getFlightDuration(a.directFlight.depurtureTime, a.directFlight.arrivalTime);
  a.directFlight.depurtureTime = getFormatDateToHHMM(a.directFlight.depurtureTime);
  a.directFlight.arrivalTime = getFormatDateToHHMM(a.directFlight.arrivalTime);
  a.directFlight.transferAmount = getTransferAmount(a.directFlight.transferPoint);

  a.returnFlight.flightDuration = getFlightDuration(a.returnFlight.depurtureTime, a.returnFlight.arrivalTime);
  a.returnFlight.depurtureTime = getFormatDateToHHMM(a.returnFlight.depurtureTime);
  a.returnFlight.arrivalTime = getFormatDateToHHMM(a.returnFlight.arrivalTime);
  a.returnFlight.transferAmount = getTransferAmount(a.returnFlight.transferPoint);
}

const newPage = new Page(rootElement, FLIGHTS_MODEL);
newPage.init();
