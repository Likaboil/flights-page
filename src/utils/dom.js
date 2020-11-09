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

export const render = (container, element, position = RenderPosition.BEFORE_END) => {
  container = getElement(container);
  element = getElement(element);

  switch (position) {
    case RenderPosition.BEFORE_BEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTER_BEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFORE_END:
      container.append(element);
      break;
    case RenderPosition.AFTER_END:
      container.after(element);
      break;
    default:
      throw new Error(`Unknown render position: ${position}`);
  }
}

export const clearElement = (element) => {
  if(element.parentNode) {
    element.parentNode.removeChild(element);
  }
}
