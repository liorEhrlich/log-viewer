import {
  format,
  fromUnixTime,
  differenceInMinutes,
  formatDuration,
} from "date-fns";

export const convertEpochToDateString = (date) =>
  format(fromUnixTime(date), "dd/MM/yy HH:m").toString();

export const getMinutesBetweenEpochTimes = (laterEpoch, earlyEpoch) =>
  formatDuration({
    minutes: differenceInMinutes(
      fromUnixTime(laterEpoch),
      fromUnixTime(earlyEpoch)
    ),
  });
