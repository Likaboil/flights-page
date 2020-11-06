import {AbstractView} from '../index';

const createContainerTemplate = () => {
  return  `<div class="container"></div>`;
}

export default class CreateContainer extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createContainerTemplate();
  }
}
