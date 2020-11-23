import {AbstractView} from '../index';

const createMessageTemplate = (title, text) => {
  return (
    `<div class="message">
      <p class="message__title">${title}</p>
      <p class="message__text">${text}</p>
    </div>`
  );
};

export default class MessageView extends AbstractView {
  constructor(title, text) {
    super();
    this.title = title;
    this.text = text;
  }

  getTemplate() {
    return createMessageTemplate(this.title, this.text);
  }
}
