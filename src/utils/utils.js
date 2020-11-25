import {ENDING_OF_TRANSFER_AMOUNT_LABEL, NO_TRANSFER_AMOUNT_LABEL} from '../const';

export const splitPrice = (price) => {
  const priceString = price.toString();
  return `${priceString.slice(0, 2)} ${priceString.slice(2, 5)} ${priceString.slice(5, 8)}`;
};

export const getTransferAmountLabel = (transferPoints) => {
  const transferAmount = transferPoints.length;

  if (transferAmount % 10 === 0 && transferAmount !== 10) {
    return NO_TRANSFER_AMOUNT_LABEL;
  }

  if (transferAmount % 10 === 1 && transferAmount !== 11) {
    return `${transferAmount} ${ENDING_OF_TRANSFER_AMOUNT_LABEL[0]}`;
  }

  if (transferAmount % 10 > 1 && transferAmount % 10 < 5) {
    return `${transferAmount} ${ENDING_OF_TRANSFER_AMOUNT_LABEL[1]}`;
  }

  return `${transferAmount} ${ENDING_OF_TRANSFER_AMOUNT_LABEL[2]}`;
};
