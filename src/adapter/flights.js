export const adaptFlight = (newFlight) => {

  return {
    id: newFlight.id,
    airCompanyName: newFlight.airCompany.name,
    airCompanyLogo: newFlight.airCompany.logo,
    price: Number(newFlight.price),
    directFlight: {
      departurePoint: newFlight.firstPoint,
      departureTime: newFlight.firstStartDate,
      arrivalPoint: newFlight.secondPoint,
      arrivalTime: newFlight.firstEndDate,
      transferPoints: newFlight.firstTransferPoints,
    },
    returnFlight: {
      departurePoint: newFlight.secondPoint,
      departureTime: newFlight.secondStartDate,
      arrivalPoint: newFlight.firstPoint,
      arrivalTime: newFlight.secondEndDate,
      transferPoints: newFlight.secondTransferPoints,
    },
  };
};

export const adaptFlightToClient = (flight) => adaptFlight(flight);

export const adaptFlightsToClient = (flights) => flights.map(adaptFlightToClient);
