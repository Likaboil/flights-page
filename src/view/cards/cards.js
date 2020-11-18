import {AbstractView} from '../index';

const createCardTemplate = (item) => {
  return (
    `<div>
      <div class="card__header">
        <p class="card__title">${item.price} p</p>
        <img src="./img/${item.airCompanyLogo}.png" alt="Логотип авиакомпании ${item.airCompanyName}" class="card__logo" width="110" height="36">
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${item.directFlight.departurePoint}–${item.directFlight.arrivalPoint}</p>
          <span class="card__text">${item.directFlight.depurtureTime} – ${item.directFlight.arrivalTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">21ч 15м</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">2 пересадки</p>
          <span class="card__text">${item.directFlight.transferPoint}</span>
        </div>
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${item.returnFlight.departurePoint}–${item.returnFlight.arrivalPoint}</p>
          <span class="card__text">${item.returnFlight.depurtureTime} – ${item.returnFlight.arrivalTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">13ч 30м</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">1 пересадка</p>
          <span class="card__text">${item.returnFlight.transferPoint}</span>
        </div>
      </div>
    </div>`
  );
};

export default class CardView extends AbstractView {

  getTemplate() {
    return createCardTemplate();
  }
}
