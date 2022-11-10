import { MAX_AGE, MIN_AGE } from "../constants";
import { getTimeOfRent } from "../helpers.date";
import { getRandomGaussValue } from "../helpers.math";
import { NAMES } from "./_data";

export function getRandomInRange(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

export function getIsProbable(probability) {
  const randomPercent = getRandomInRange(0, 100);
  return randomPercent <= probability;
}
export function getRandomSecondsOfRent() {
  return getRandomInRange(10, 60);
}

function getRandomName() {
  const randomIndex = getRandomInRange(0, NAMES.length - 1);
  return NAMES[randomIndex];
}

export function getRandomAge(maxAge = MAX_AGE) {
  const minAge = maxAge <= MIN_AGE ? 1 : MIN_AGE;
  return getRandomGaussValue(minAge, maxAge);
}

export function createRandomGuest(props = {}) {
  return {
    name: getRandomName(),
    age: getRandomAge(props.maxAge)
  };
}

export function createRandomChildGuest() {
  return createRandomGuest({ maxAge: 17 });
}

export function createRandomRoom() {
  return {
    guests: createRandomGuest(),
    whenLeave: getTimeOfRent(getRandomSecondsOfRent())
  };
}

/*
  countOfGuests - number
*/
export function createGroupOfGuests(props) {
  const guestsList = [];
  let prevIndexProbability = 0;
  for (let i = 0; i < props.countOfGuests; i++) {
    if (i === 0) {
      guestsList.push(createRandomGuest());
    } else {
      prevIndexProbability += 50 / 2 ** (i - 1);
      const isNextChild = getIsProbable(prevIndexProbability);
      if (isNextChild) {
        guestsList.push(createRandomChildGuest());
      } else {
        guestsList.push(createRandomGuest());
      }
    }
  }

  return guestsList;
}

export function createRandomGroupOfGuests() {
  return createGroupOfGuests({
    countOfGuests: getRandomInRange(1, 5)
  });
}
