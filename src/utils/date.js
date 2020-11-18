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
