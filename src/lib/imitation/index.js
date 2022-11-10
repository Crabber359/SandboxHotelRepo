import { COUNT_OF_ROOMS } from "../constants";
import {
  createHistoryOfGuests,
  getOccupancyOfHotel,
  getRooms,
  saveRoomsToDb,
  showTableOfRooms
} from "../database";
import { getTimeOfRent } from "../helpers.date";
import {
  createRandomGroupOfGuests,
  getRandomSecondsOfRent,
  getIsProbable
} from "./helper.random";
import { createRandomInterval } from "./randomInterval";
import "./_data";

const ErrorCodes = {
  NO_EMPTY_ROOM: 1,
  NO_SUITABLE_ROOM: 2
};

export function addGroupToHotel(rooms = getRooms()) {
  const group = createRandomGroupOfGuests();
  const whenLeave = getTimeOfRent(getRandomSecondsOfRent());
  const emptyRoomIndex = rooms.findIndex(
    (room) => !room.guests && room.capacity >= group.length
  );

  if (getOccupancyOfHotel(rooms) === COUNT_OF_ROOMS) {
    return {
      error: ErrorCodes.NO_EMPTY_ROOM,
      group
    };
  }

  if (emptyRoomIndex === -1) {
    return {
      error: ErrorCodes.NO_SUITABLE_ROOM,
      group
    };
  }

  rooms[emptyRoomIndex] = {
    ...rooms[emptyRoomIndex],
    guests: group,
    whenLeave
  };

  saveRoomsToDb(rooms);
  return {
    rooms,
    settledIndex: emptyRoomIndex
  };
}

export function createHotelStartPopulation(rooms = getRooms()) {
  if (rooms.findIndex((room) => room.guests) !== -1) {
    return;
  }
  for (let i = 0; i < COUNT_OF_ROOMS; i++) {
    if (getIsProbable(30)) {
      addGroupToHotel();
    }
  }
}

export function createHotelImitation() {
  createHotelStartPopulation();

  const prosessOfImitation = createRandomInterval(
    () => {
      const { rooms, error, group, settledIndex } = addGroupToHotel();
      if (error === ErrorCodes.NO_EMPTY_ROOM) {
        console.log("The are no epty rooms");
        return;
      }

      if (error === ErrorCodes.NO_SUITABLE_ROOM) {
        const names = group.map(({ name }) => name).join(", ");
        console.log(`There is no suitable room for the ${group.length} guests\n
    ${names}`);
        return;
      }

      const settledRoom = {
        ...rooms[settledIndex],
        whenSettled: Date.now(),
        room: settledIndex + 1
      };
      createHistoryOfGuests(settledRoom);
      showTableOfRooms(rooms);
    },
    1000,
    2000
  );

  return prosessOfImitation;
}

export const hotelImitation = createHotelImitation();
