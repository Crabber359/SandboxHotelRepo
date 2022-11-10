import { EMPTY_ROOM } from "./constants";
import { getTimeOfRent } from "./helpers.date";

export function findFirstEmptyRoom(rooms) {
  return rooms.findIndex((room) => !room.guests);
}

export function createEmptyHotel() {
  const list = [];
  const ROOMS_COUNT_MAP = [4, 4, 4, 4, 4];
  ROOMS_COUNT_MAP.forEach((countOfRooms, capacity) => {
    for (let i = 0; i < countOfRooms; i++) {
      list.push({ ...EMPTY_ROOM, capacity: capacity + 1 });
    }
  });
  return list;
}

export function refreshHotelRooms(rooms) {
  rooms.forEach((room) => {
    if (room.whenLeave < Date.now()) {
      room.whenLeave = null;
      room.guests = null;
    }
  });
  return rooms;
}

export function createRoomRecord(guests, secondsOfRent) {
  return {
    guests,
    whenLeave: getTimeOfRent(secondsOfRent)
  };
}

export function createArrayWithRule(size, rule) {
  return Array(size)
    .fill(null)
    .map((_, index) => rule(index));
}
