import {AbstractView} from '../index';

const createCardTemplate = () => {
  return `<div>
  <div class="card__header">
    <p class="card__title">13 400 p</p>
    <img src="./img/s7logo.png" alt="Логотип авиакомпании" class="card__logo" width="110" height="36">
  </div>
  <div class="card__row">
    <div class="card__description">
      <p class="card__subtitle">MOW – HKT</p>
      <span class="card__text">10:45 – 08:00</span>
    </div>
    <div class="card__description">
      <p class="card__subtitle">В пути</p>
      <span class="card__text card__text--length">21ч 15м</span>
    </div>
    <div class="card__description">
      <p class="card__subtitle">2 пересадки</p>
      <span class="card__text">HKG, JNB</span>
    </div>
  </div>
  <div class="card__row">
    <div class="card__description">
      <p class="card__subtitle">MOW – HKT</p>
      <span class="card__text">11:20 – 00:50</span>
    </div>
    <div class="card__description">
      <p class="card__subtitle">В пути</p>
      <span class="card__text card__text--length">13ч 30м</span>
    </div>
    <div class="card__description">
      <p class="card__subtitle">1 пересадка</p>
      <span class="card__text">HKG</span>
    </div>
  </div>
  </div>`;
}

export default class CreateCard extends AbstractView {
  constructor() {
  super();
  }

  getTemplate() {
  return createCardTemplate();
  }
}
