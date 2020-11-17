import {AbstractView} from '../index';

const createCardTemplate = (item) => {
  return (
    `<div>
      <div class="card__header">
        <p class="card__title">${item.price} p</p>
        <img src="./img/${item.airCompanyLogo}.png" alt="${item.airCompanyName}" class="card__logo" width="110" height="36">
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${item.departurePont}–${item.arrivingPont}</p>
          <span class="card__text">${item.directDepurtureTime} – ${item. directArrivingTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">${item.directFlightDuration}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">${item.directTransfersAmount}</p>
          <span class="card__text">${item.directTransferPoint}</span>
        </div>
      </div>
      <div class="card__row">
        <div class="card__description">
          <p class="card__subtitle">${item.arrivingPont}–${item.departurePont}</p>
          <span class="card__text">${item.returnDepurtureTime} – ${item.returnArrivingTime}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">В пути</p>
          <span class="card__text card__text--length">${item.returnFlightDuration}</span>
        </div>
        <div class="card__description">
          <p class="card__subtitle">${item.returnTransfersAmount}</p>
          <span class="card__text">${item.returnTransferPoint}</span>
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
