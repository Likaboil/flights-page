import {getRandomInt, getRandomArrayValue, getRandomArray, getRandomDate} from '../utils/randomiser';

const FLIGHTS_POINTS = {
  FIRST_POINT: `MOW`,
  SECOND_POINT: `HKT`,
};

const TRANSFER_POINTS = [`BKK`, `HKG`, `DOH`, `IST`, `JNB`];

const AIR_COMPANY = [
  {
    NAME: `Turkish Airlines`,
    LOGO: `turkish-logo.png`,
  },
  {
    NAME: `S7`,
    LOGO: `s7logo.png`,
  }
];

const moveDateConfig = {
  minutes: 30,
  hours: 8,
  days: 2,
};
