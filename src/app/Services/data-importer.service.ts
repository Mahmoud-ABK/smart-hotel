import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { RoomModel } from '../Models/room-model';
import { Step1data } from '../Models/step1data';

@Injectable({
  providedIn: 'root'
})
export class DataImporterService {
  step1GuestData: Step1data
  step2RoomData: {
    Roomids:Array<{
      id:number,
      length:number
    }> ,
    SelectedRooms: RoomModel[],
    checkin: string,
    checkout: string
  }
  database: AngularFireDatabase
  Roomsref: AngularFireList<RoomModel>
  constructor(db: AngularFireDatabase) {
    this.database = db
    this.Roomsref = db.list('/Rooms')
    // console.log(this.Roomsref)

  }
  //getting rooms
  RoomImporter() {
    return this.Roomsref
  }
  //sending step1 data to step3
  ToStep3(object: Step1data) {
    this.step1GuestData = object
    // console.log(this.step1GuestData)

  }
  //sending step2 data to step3
  ToStep3fromStep2(object: {
    Roomids: Array<{
      id:number,
      length:number
    }> ,
    SelectedRooms: RoomModel[],
    checkin: string,
    checkout: string
  }) {
    this.step2RoomData = object

  }
  RoomUpdaterCHECKIN(key: any, value: any,path:number) {
    return this.database.object('/Rooms/' + String(key) + '/RoomCheckinDate').update({[path]:value})
  }
  RoomUpdaterCHECKOUT(key: any, value: any,path:number) {
    return this.database.object('/Rooms/' + String(key) + '/RoomCheckoutDate').update({[path]:value})
  }
  RoomUpdaterIDhistory(key: any, value: any,path:number) {
    return this.database.object('/Rooms/' + String(key) + '/guestHistoryID').update({[path]:value})
  }
 
}


