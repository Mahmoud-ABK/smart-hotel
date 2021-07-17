import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class InAppOperationsService {
  currentLoginInData: {
    FirstName: string;
    LastName: string;
    Birthdate: string;
    PhoneNumber: any;
    IDorPass: number;
    Email: string;
    People: number;
    Nights: number;
    RoomidS: any[];
    Pic: string;
    checkin: string;
    checkout: string;
    id: string
  }
  RoomID: number
  database:AngularFireDatabase

  constructor(public db:AngularFireDatabase) {

  }
  IDtransmitter(id: number) {
    this.RoomID = id
    console.log(this.RoomID);

  }
  currentDataTransmitter(
    data: {
      FirstName: string;
      LastName: string;
      Birthdate: string;
      PhoneNumber: any;
      IDorPass: number;
      Email: string;
      People: number;
      Nights: number;
      RoomidS: any[];
      Pic: string;
      checkin: string;
      checkout: string;
      id: string
    }
  ) {
    this.currentLoginInData = data
    console.log(this.currentLoginInData)
  }
  updating(key: any,tem:number,h:number,light:boolean[],w:number) {
    return this.db.object('/Rooms/' + String(key)).update({RoomTemperature:tem ,
      Roomhumidity:h,
      RoomLighting:light,
      WaterTempertaure:w
     })
  }
  /* hum(key: any,value:number) {
    return this.db.object('/Rooms/' + String(key)).update({Roomhumidity:value })
  }
  lights(key: any,value:boolean[]) {
    return this.db.object('/Rooms/' + String(key)).update({RoomLighting:value })
  }
  WaterTemp(key: any,value:number) {
    return this.db.object('/Rooms/' + String(key)).update({WaterTempertaure:value })
  }
 */



}
