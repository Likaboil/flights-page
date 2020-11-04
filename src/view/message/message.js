import {Abstract} from '../abstract';

const createMessageTemplate = () => {
  return `
    <div class="message">
      <p class="message__title">По вашему запросу ничего не найдено!</p>
      <p class="message__text">Попробуйте изменить запрос.</p>
    </div>
    <div class="message">
      <p class="message__text">Подождите, загружаю рейсы</p>
    </div>`;
}

export default class CreateMessage extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createMessageTemplate();
  }
}
