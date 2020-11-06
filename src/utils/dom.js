import {AbstractView} from '../view/index';

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
