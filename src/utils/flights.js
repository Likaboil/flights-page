import {getFlightDurationInMs} from './date';
import {SortType} from '../const';

export const sortFlightsDuration = (flight1, flight2) => {
  const directFlightDuration1 = getFlightDurationInMs(flight1.directFlight.departureTime, flight1.directFlight.arrivalTime);
  const directFlightDuration2 = getFlightDurationInMs(flight2.directFlight.departureTime, flight2.directFlight.arrivalTime);

  return (directFlightDuration1 - directFlightDuration2);
};

export const sortFlightsPrice = (flight1, flight2) => flight1.price - flight2.price;

export const sort = (flights, sortType) => {
  switch (sortType) {
    case SortType.SPEED:
      return flights.sort(sortFlightsDuration);
    case SortType.PRICE:
      return flights.sort(sortFlightsPrice);
    default:
      return flights;
  }
};
