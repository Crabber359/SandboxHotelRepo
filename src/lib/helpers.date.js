function addZero(item) {
  return item < 10 ? "0" + item : item;
}

export function formatDateToReadable(dateValue) {
  const time = new Date(dateValue);
  const year = time.getFullYear();
  const month = addZero(time.getMonth() + 1);
  const day = addZero(time.getDate());
  const hours = addZero(time.getHours());
  const minutes = addZero(time.getMinutes());
  const seconds = addZero(time.getSeconds());
  return `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;
}

export function getTimeOfRent(secondsOfRent) {
  return Date.now() + secondsOfRent * 1000;
}
