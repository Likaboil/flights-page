export const splitPrice = (price) => {
  const priceString = price.toString();
  return `${priceString.slice(0, 2)} ${priceString.slice(2, 5)} ${priceString.slice(5, 8)}`;
};

export const getTransferPoints = (transferPoint) => transferPoint.join(`, `);
