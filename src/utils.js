export const streamLogs = () => {
  Object.keys(logs).forEach((name, i) => {
    setTimeout(() => {
      console.log(name);
    }, i * 2000);
  });
}