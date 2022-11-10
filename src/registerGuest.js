import { saveRoomsToDb, getRooms } from "./lib/database";
import { createRoomRecord, findFirstEmptyRoom } from "./lib/helpers";

export function registerGuest(guests, secondsOfRent) {
  const rooms = getRooms();
  const firstEmptyRoomIndex = findFirstEmptyRoom(rooms);

  if (firstEmptyRoomIndex === -1) {
    saveRoomsToDb(rooms);
    return console.log("no empty rooms");
  }
  rooms[firstEmptyRoomIndex] = createRoomRecord(guests, secondsOfRent);
  saveRoomsToDb(rooms);
  return rooms;
}
