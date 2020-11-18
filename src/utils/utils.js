export const splitPrice = (price) => {
  const priceString = price.toString();
  return `${priceString.slice(0, 2)} ${priceString.slice(2, 5)} ${priceString.slice(5, 8)}`;
};

export const getTransferAmount = (transferPoint) => {
  let transferAmount = transferPoint.length;

  switch (transferAmount) {
    case 1:
      transferAmount = `1 пересадка`;
      break;
    case 2:
      transferAmount = `2 пересадки`;
      break;
    case 3:
      transferAmount = `3 пересадки`;
      break;
    default:
      transferAmount = `Без пересадок`;
      break;
  }

  return transferAmount;
};
