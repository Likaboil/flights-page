import {AbstractView} from '../index';
import {splitPrice, getTransferAmountLabel} from '../../utils/utils';
import {getFormatDateToHHMM, getFlightDurationLabel} from '../../utils/date';

const createCardTemplate = (flight) => {
  return (
    `<div>
      <div class="card__header">
        <p class="card__title">${flight.price} p</p>
        <img src="./img/${flight.airCompanyLogo}.png" alt="Логотип авиакомпании ${flight.airCompanyName}" class="card__logo" width="110" height="36">
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${flight.directFlight.departurePoint}–${flight.directFlight.arrivalPoint}</p>
          <span class="card__text">${flight.directFlight.depurtureTime} – ${flight.directFlight.arrivalTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">21ч 15м</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">2 пересадки</p>
          <span class="card__text">${flight.directFlight.transferPoint}</span>
        </div>
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${flight.returnFlight.departurePoint}–${flight.returnFlight.arrivalPoint}</p>
          <span class="card__text">${flight.returnFlight.depurtureTime} – ${flight.returnFlight.arrivalTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">13ч 30м</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">1 пересадка</p>
          <span class="card__text">${flight.returnFlight.transferPoint}</span>
        </div>
      </div>
    </div>`
  );
};

export default class CardView extends AbstractView {
  constructor(flight) {
    super();
    this._flight = flight;
  }
  getTemplate() {
    return createCardTemplate(this._flight);
  }
}
