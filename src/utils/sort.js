import {getFlightDurationInMs} from './date';

export const sortFlightsDuration = (flight1, flight2) => {
  const directFlightDuration1 = getFlightDurationInMs(flight1.directFlight.departureTime, flight1.directFlight.arrivalTime);
  const directFlightDuration2 = getFlightDurationInMs(flight2.directFlight.departureTime, flight2.directFlight.arrivalTime);

  return (directFlightDuration1 - directFlightDuration2);
};
