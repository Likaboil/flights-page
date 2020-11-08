import {AbstractView} from '../index';

const createContainerTemplate = () => {
  return (
  `<div class="container"></div>`
  );
}

export default class ContainerView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    return createContainerTemplate();
  }
}
