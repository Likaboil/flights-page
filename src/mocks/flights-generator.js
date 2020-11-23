import {nanoid} from 'nanoid';
import {getRandomInt, getRandomArrayValue, getRandomArray, getRandomDate} from '../utils/randomiser';

const moveDateConfig = {
  minutes: 60,
  hours: 10,
  days: 2,
};

const FLIGHTS_POINTS = {
  first: `MOW`,
  second: `HKT`,
};

const TRANSFER_POINTS = [`BKK`, `HKG`, `DOH`, `IST`, `JNB`];

const AIR_COMPANY = [
  {
    name: `Turkish Airlines`,
    logo: `turkish-logo.png`,
  },
  {
    name: `S7`,
    logo: `s7logo.png`,
  }
];

const extend = (a, ...b) => Object.assign({}, a, ...b);

const generateFlight = () => {
  const DirectDateStart = new Date();
  const DirectDateEnd = getRandomDate(extend(
      moveDateConfig,
      {
        date: DirectDateStart,
      }
  ));

  const ReturnDateStart = new Date(DirectDateStart);
  ReturnDateStart.setDate(ReturnDateStart.getDate() + 7);
  const ReturnDateEnd = getRandomDate(extend(
      moveDateConfig,
      {
        date: ReturnDateStart,
      }
  ));

  return {
    id: nanoid(),
    airCompany: getRandomArrayValue(AIR_COMPANY),
    price: getRandomInt(10000, 20000),
    firstStartDate: DirectDateStart,
    firstEndDate: DirectDateEnd,
    secondStartDate: ReturnDateStart,
    secondEndDate: ReturnDateEnd,
    firstPoint: FLIGHTS_POINTS.first,
    secondPoint: FLIGHTS_POINTS.second,
    firstTransferPoints: getRandomArray(TRANSFER_POINTS, getRandomInt(0, 4)),
    secondTransferPoints: getRandomArray(TRANSFER_POINTS, getRandomInt(0, 4)),
  };
};

export const generateFlights = (count) => new Array(count).fill().map(generateFlight);
