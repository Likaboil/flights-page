import {AbstractView} from '../index';
import {splitPrice, getTransferAmountLabel} from '../../utils/utils';
import {getFormatDateToHHMM, getFlightDurationLabel} from '../../utils/date';

const createCardFlightTemplate = (flight) => {
  const price = splitPrice(flight.price);

  const airCompanyLogo = flight.airCompanyLogo;
  const airCompanyName = flight.airCompanyName;

  const directDeparturePoint = flight.directFlight.departurePoint;
  const directArrivalPoint = flight.directFlight.arrivalPoint;
  const directDepartureTime = getFormatDateToHHMM(flight.directFlight.departureTime);
  const directArrivalTime = getFormatDateToHHMM(flight.directFlight.arrivalTime);
  const directTransferPoints = flight.directFlight.transferPoints.join(`, `);
  const directTransferAmount = getTransferAmountLabel(flight.directFlight.transferPoints);
  const directFlightDuration = getFlightDurationLabel(flight.directFlight.departureTime, flight.directFlight.arrivalTime);

  const returnDeparturePoint = flight.returnFlight.departurePoint;
  const returnArrivalPoint = flight.returnFlight.arrivalPoint;
  const returnDepartureTime = getFormatDateToHHMM(flight.returnFlight.departureTime);
  const returnArrivalTime = getFormatDateToHHMM(flight.returnFlight.arrivalTime);
  const returnTransferPoints = flight.returnFlight.transferPoints.join(`, `);
  const returnTransferAmount = getTransferAmountLabel(flight.returnFlight.transferPoints);
  const returnFlightDuration = getFlightDurationLabel(flight.returnFlight.departureTime, flight.returnFlight.arrivalTime);

  return (
    `<div>
      <div class="card__header">
        <p class="card__title">${price} p</p>
        <img src="./img/${airCompanyLogo}" alt="Логотип авиакомпании ${airCompanyName}" class="card__logo" width="110" height="36">
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${directDeparturePoint}–${directArrivalPoint}</p>
          <span class="card__text">${directDepartureTime} – ${directArrivalTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">${directFlightDuration}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">${directTransferAmount}</p>
          <span class="card__text">${directTransferPoints}</span>
        </div>
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${returnDeparturePoint}–${returnArrivalPoint}</p>
          <span class="card__text">${returnDepartureTime} – ${returnArrivalTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">${returnFlightDuration}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">${returnTransferAmount}</p>
          <span class="card__text">${returnTransferPoints}</span>
        </div>
      </div>
    </div>`
  );
};

export default class CardFlightView extends AbstractView {
  constructor(flight) {
    super();
    this._flight = flight;
  }
  getTemplate() {
    return createCardFlightTemplate(this._flight);
  }
}
