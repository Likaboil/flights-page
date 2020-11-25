import {ENDING_OF_TRANSFER_AMOUNT_LABEL, NO_TRANSFER_AMOUNT_LABEL} from '../const';

export const splitPrice = (price) => {
  const priceString = price.toString();
  return `${priceString.slice(0, 2)} ${priceString.slice(2, 5)} ${priceString.slice(5, 8)}`;
};
