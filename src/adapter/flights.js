export const adaptFlight = (flight) => {

  return {
    id: flight.id,
    airCompanyName: flight.airCompany.NAME,
    airCompanyLogo: flight.airCompany.LOGO,
    price: Number(flight.price),
    directFlight: {
      departurePoint: flight.firstPoint,
      departureTime: flight.firstStartDate,
      arrivalPoint: flight.secondPoint,
      arrivalTime: flight.firstEndDate,
      transferPoints: flight.firstTransferPoints,
    },
    returnFlight: {
      departurePoint: flight.secondPoint,
      departureTime: flight.secondStartDate,
      arrivalPoint: flight.firstPoint,
      arrivalTime: flight.secondEndDate,
      transferPoints: flight.secondTransferPoints,
    },
  };
};
