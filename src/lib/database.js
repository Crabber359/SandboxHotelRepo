import { HISTORY_OF_GUESTS, ROOMS_KEY } from "./constants";
import {
  createEmptyHotel,
  refreshHotelRooms,
  findFirstEmptyRoom
} from "./helpers";
import { formatDateToReadable } from "./helpers.date";
import { createRandomGroupOfGuests } from "./imitation/helper.random";

export function saveRoomsToDb(rooms) {
  localStorage.setItem(ROOMS_KEY, JSON.stringify(rooms));
}

export function getRoomsFromDb() {
  const roomsString = localStorage.getItem(ROOMS_KEY);
  return !roomsString ? null : JSON.parse(roomsString);
}

export function saveGuestsToHistoryDb(guests) {
  localStorage.setItem(HISTORY_OF_GUESTS, JSON.stringify(guests));
}

export function getHistoryOfGuestsFromDb() {
  const guestsString = localStorage.getItem(HISTORY_OF_GUESTS);
  return !guestsString ? [] : JSON.parse(guestsString);
}

export function createHistoryOfGuests(settledRoom) {
  const history = getHistoryOfGuestsFromDb();
  history.push(settledRoom);
  saveGuestsToHistoryDb(history);
}

export function getRooms() {
  const rooms = getRoomsFromDb();
  if (!rooms) {
    return createEmptyHotel();
  }
  return refreshHotelRooms(rooms);
}

export function getOccupancyOfHotel(extRooms) {
  const rooms = extRooms || getRooms();
  return rooms.reduce((acc, room) => {
    if (room.guests) {
      acc++;
    }
    return acc;
  }, 0);
}

export function showTableOfRooms(rooms = getRooms()) {
  const table = rooms.reduce((acc, room, index) => {
    if (!room.guests) {
      return `${acc}The room ${index + 1}(${room.capacity}) is empty\n`;
    }
    const formatedDate = formatDateToReadable(room.whenLeave);
    return `${acc}The room ${index + 1}(${room.capacity}) is renting by ${
      room.guests[0].name
    }(${room.guests.length}) until ${formatedDate}\n`;
  }, "");
  console.log(table);
  const emptyRoom = findFirstEmptyRoom(rooms);
  if (emptyRoom === -1) {
    console.log("There are no empty rooms!");
  }
}

export function showHistory() {
  const history = getHistoryOfGuestsFromDb();
  const readableHistory = history
    .map((element, index) => {
      const dateOfSettled = formatDateToReadable(element.whenSettled);
      const dateOfLeave = formatDateToReadable(element.whenLeave);
      const names = element.guests
        .reduce((acc, item) => {
          acc.push(item.name);
          return acc;
        }, [])
        .join(", ");
      if (element.guests.length === 1) {
        return `${index + 1}. The (${element.guests.length}) Guest: ${names}.
    Rented Room ${element.room}
    from: ${dateOfSettled}
    to: ${dateOfLeave}\n`;
      }

      return `${index + 1}. The (${element.guests.length}) Guests: ${names}.
    Rented Room ${element.room}
    from: ${dateOfSettled}
    to: ${dateOfLeave}\n`;
    })
    .join("\n");

  return console.log(readableHistory);
}
