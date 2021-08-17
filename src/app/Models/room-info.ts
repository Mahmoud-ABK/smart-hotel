export class RoomInfo {
  //Room related
  roomid: number;
  RoomPrice: number;
  RoomTemperature: number;
  Roomhumidity: number;
  RoomLighting: string[];
  doorOpen: boolean;
  doorHistoryArchive: any[]
  WaterTemperature: number;
  //Guestrelated
  listOfGuestsNames: string[]
  listOfGuestNumbers: any[]
  RoomCheckinDate: string[];
  RoomCheckoutDate: string[];
  guestHistoryID: string[];



}
