import {MINUTE, HOUR, DAY} from '../const';

export const getRandomInt = (min, max) => min + Math.floor(Math.random() * (max - min));
export const getRandomArrayValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const getRandomArray = (arr, length = arr.length) => arr
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, length);
