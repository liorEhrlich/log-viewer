const waitFor = (ms) =>
    new Promise((r) => {
      setTimeout(r, ms);
    });

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const streamLogs = async (logs, onLogStream) => {
  await asyncForEach(logs, async (log) => {
    await waitFor(2000);
    await onLogStream(log);
  });
};

export default streamLogs;
