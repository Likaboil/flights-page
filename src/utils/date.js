import Moment from 'moment';
import {extendMoment} from 'moment-range';
const moment = extendMoment(Moment);

export const getFormatDateToHHMM = (date) => moment(date).format(`HH:mm`);

export const concatinateTimes = (startDate, endDate) => `${getFormatDateToHHMM(startDate)}-${getFormatDateToHHMM(endDate)}`;
