import {getRandomInt, getRandomArrayValue, getRandomArray, getRandomDate} from '../utils/randomiser';

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