export const streamLogs = logs => {
  Object.keys(logs).forEach((name, i) => {
    setTimeout(() => {
      console.log(name, logs[name]);
    }, i * 2000);
  });
};
