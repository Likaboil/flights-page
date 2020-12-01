import {generateFlights} from '../mocks/flights-generator';
import {adaptFlightsToClient} from '../adapter/flights';

const DELAY_MS = 500;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const FLIGHT_AMOUNT = 5;
export const mockFlights = generateFlights(FLIGHT_AMOUNT);

export default class Api {

  static getFlights() {
    return delay(DELAY_MS).then(() => adaptFlightsToClient(mockFlights));
  }
}
