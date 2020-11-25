import {AbstractView} from '../index';
import {splitPrice, getTransferAmountLabel} from '../../utils/utils';
import {getFormatDateToHHMM, getFlightDurationLabel} from '../../utils/date';

const createCardTemplate = (flight) => {
  const price = splitPrice(flight.price);

  const directDepartureTime = getFormatDateToHHMM(flight.directFlight.departureTime);
  const directArrivalTime = getFormatDateToHHMM(flight.directFlight.arrivalTime);
  const directTransferPoints = flight.directFlight.transferPoints.join(`, `);
  const directTransferAmount = getTransferAmountLabel(flight.directFlight.transferPoints);



  const returnDepartureTime = getFormatDateToHHMM(flight.returnFlight.departureTime);
  const returnArrivalTime = getFormatDateToHHMM(flight.returnFlight.arrivalTime);
  const returnTransferPoints = flight.returnFlight.transferPoints.join(`, `);
  const returnTransferAmount = getTransferAmountLabel(flight.returnFlight.transferPoints);


  return (
    `<div>
      <div class="card__header">
        <p class="card__title">${price} p</p>
        <img src="./img/${flight.airCompanyLogo}.png" alt="Логотип авиакомпании ${flight.airCompanyName}" class="card__logo" width="110" height="36">
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${flight.directFlight.departurePoint}–${flight.directFlight.arrivalPoint}</p>
          <span class="card__text">${directDepartureTime} – ${directArrivalTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">21ч 15м</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">${directTransferAmount}</p>
          <span class="card__text">${directTransferPoints}</span>
        </div>
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${flight.returnFlight.departurePoint}–${flight.returnFlight.arrivalPoint}</p>
          <span class="card__text">${returnDepartureTime} – ${returnArrivalTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">13ч 30м</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">${returnTransferAmount}</p>
          <span class="card__text">${returnTransferPoints}</span>
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
