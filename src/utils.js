export const streamLogs = logs => {
  Object.keys(logs).forEach((name, i) => {
    setTimeout(() => {
      console.log(name, logs[name]);
    }, i * 2000);
  });
};

export const convertEpochToDate = epoch => {
  const milliseconds = epoch * 1000;
  const epochDate = new Date(milliseconds * 1000);
  return epochDate.toTimeString();
};
