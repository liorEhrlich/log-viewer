import {format, fromUnixTime} from "date-fns";

export const streamLogs = logs => {
  Object.keys(logs).forEach((name, i) => {
    setTimeout(() => {
      console.log(name, logs[name]);
    }, i * 2000);
  });
};

export const convertEpochToDateString = (date) => format(fromUnixTime(date), 'dd/MM/yy HH:m').toString();
