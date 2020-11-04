import {Abstract} from '../abstract';

const createContainerTemplate = () => {
  return  `
  <div class="container">
  </div>`;
}

export default class CreateContainer extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createContainerTemplate();
  }
}
