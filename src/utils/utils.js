import {ENDING_OF_TRANSFER_AMOUNT_LABEL} from '../const';

export const splitPrice = (price) => {
  const priceString = price.toString();
  return `${priceString.slice(0, 2)} ${priceString.slice(2, 5)} ${priceString.slice(5, 8)}`;
};

export const getTransferPoints = (transferPoints) => transferPoints.join(`, `);

export const getTransferAmount = (transferPoints) => transferPoints.length;

export const getTransferAmountLabel = (transferPoint) => {
  const transferAmount = getTransferAmount(transferPoint);

  if (transferAmount % 10 === 0 && transferAmount !== 10) {
    return ENDING_OF_TRANSFER_AMOUNT_LABEL[0];
  } else if (transferAmount % 10 === 1 && transferAmount !== 11) {
    return `${transferAmount} ${ENDING_OF_TRANSFER_AMOUNT_LABEL[1]}`;
  } else if (transferAmount % 10 > 1 && transferAmount % 10 < 5) {
    return `${transferAmount} ${ENDING_OF_TRANSFER_AMOUNT_LABEL[2]}`;
  }

  return `${transferAmount} ${ENDING_OF_TRANSFER_AMOUNT_LABEL[3]}`;
};
