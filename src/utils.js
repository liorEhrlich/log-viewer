import {
  format,
  fromUnixTime,
  differenceInMinutes,
  formatDuration,
} from "date-fns";

export const streamLogs = (logs) => {
  Object.keys(logs).forEach((name, i) => {
    setTimeout(() => {
      console.log(name, logs[name]);
    }, i * 2000);
  });
};

export const convertEpochToDateString = (date) =>
  format(fromUnixTime(date), "dd/MM/yy HH:m").toString();

export const getMinutesBetweenEpochTimes = (laterEpoch, earlyEpoch) =>
  formatDuration({
    minutes: differenceInMinutes(
      fromUnixTime(laterEpoch),
      fromUnixTime(earlyEpoch)
    ),
  });
