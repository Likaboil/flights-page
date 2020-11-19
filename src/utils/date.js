import Moment from 'moment';
import {extendMoment} from 'moment-range';
const moment = extendMoment(Moment);

export const getFormatDateToHHMM = (date) => moment(date).format(`HH:mm`);

export const getFlightDurationInMs = (startDate, endDate) => moment.range(startDate, endDate).duration(`milliseconds`);

export const getFormatDurationToDHM = (ms) => {
  const duration = moment.duration(ms);
  return {
    days: duration.days(ms),
    hours: duration.hours(ms),
    minutes: duration.minutes(ms),
  };
};
