import Moment from 'moment';
import {extendMoment} from 'moment-range';
const moment = extendMoment(Moment);

export const getFormatDateToHHMM = (date) => moment(date).format(`HH:mm`);

export const concatinateTimes = (startDate, endDate) => `${getFormatDateToHHMM(startDate)}-${getFormatDateToHHMM(endDate)}`;

export const getFlightDurationInMs = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const range = moment.range(start, end);
  return range.duration(`milliseconds`);
};

export const getFormatDurationToDHM = (ms) => {
  const duration = moment.duration(ms);
  return {
    days: duration.days(ms),
    hours: duration.hours(ms),
    minutes: duration.minutes(ms),
  };
};

export const getFlightDuration = (startDate, endDate) => {
  const flightTimeInMs = getFlightDurationInMs(startDate, endDate);
  const flightTime = getFormatDurationToDHM(flightTimeInMs);

  if (flightTime.days > 0) {
    return `${flightTime.days}д ${flightTime.hours}ч ${flightTime.minutes}м`;
  }

  return `${flightTime.hours}ч ${flightTime.minutes}м`;
};
