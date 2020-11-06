import {AbstractView} from '../view/index';

export const RenderPosition = {
  BEFORE_BEGIN: `BEFORE_BEGIN`,
  AFTER_BEGIN: `AFTER_BEGIN`,
  BEFORE_END: `BEFORE_END`,
  AFTER_END: `AFTER_END`,
};

export const createElement = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;

  return element.firstChild;
};

export const getElement = (element) => {
  if (element instanceof AbstractView) {
    return element.getElement();
  }

  return element;
}

export const render = (element1, element2, position = RenderPosition.BEFORE_END) => {
  element1 = getElement(element1);
  element2 = getElement(element2);

  switch (position) {
    case RenderPosition.BEFORE_BEGIN:
      element1.before(element2);
      break;
    case RenderPosition.AFTER_BEGIN:
      element1.prepend(element2);
      break;
    case RenderPosition.BEFORE_END:
      element1.append(element2);
      break;
    case RenderPosition.AFTER_END:
      element1.after(element2)
      break;
    default:
      throw new Error(`Unknown render position: ${position}`);
  }
}
