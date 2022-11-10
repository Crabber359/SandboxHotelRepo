import { getRandomInRange } from "./helper.random";

function setTimeoutWithRandomInterval(callback, from, to) {
  const interval = getRandomInRange(from, to);
  return setTimeout(callback, interval);
}

export function createRandomInterval(callback, from, to) {
  let currentInterval;

  function setIntervalWithRandom() {
    currentInterval = setTimeoutWithRandomInterval(
      () => {
        callback();
        clearTimeout(currentInterval);
        setIntervalWithRandom();
      },
      from,
      to
    );
  }

  function clearInterval() {
    clearTimeout(currentInterval);
  }

  return {
    start: setIntervalWithRandom,
    stop: clearInterval
  };
}
