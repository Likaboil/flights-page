import {Abstract} from '../abstract';

const createLogoTemplate = () => {
  return `
    <div class="logo">
      <img src="./img/logo-bg.svg" alt="" class="logo__bg" width="60" height="60">
      <img src="./img/plane.svg" alt="" class="logo__upper">
    </div>`;
}

export default class CreateLogo extends Abstract {
  constructor() {
    super();
  }

  getTemplate() {
    return createLogoTemplate();
  }
}
