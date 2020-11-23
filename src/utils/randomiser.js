import {MINUTE, HOUR, DAY} from '../const';

export const getRandomInt = (min, max) => min + Math.floor(Math.random() * (max - min));
export const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const getRandomArray = (arr, length = arr.length) => arr
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, length);

export const getRandomDate = ({date = new Date(), minutes = 59, hours = 24, days = 1}) => {
  const minutesMs = getRandomInt(0, minutes * MINUTE);
  const hoursMs = getRandomInt(0, hours * HOUR);
  const daysMs = getRandomInt(0, days * DAY);

  const randomDateMs = +date + minutesMs + hoursMs + daysMs;

  return new Date(randomDateMs);
};
