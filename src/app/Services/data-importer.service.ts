import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Cleaning } from '../Models/cleaning.model';
import { GuestDataModel } from '../Models/guest-data-model';
import { RoomModel } from '../Models/room-model';
import { Step1data } from '../Models/step1data';

@Injectable({
  providedIn: 'root'
})
export class DataImporterService {
  step1GuestData: Step1data
  step2RoomData: {
    Roomids: Array<{
      id: number,
      length: number
    }>,
    SelectedRooms: RoomModel[],
    checkin: string,
    checkout: string
  }
  database: AngularFireDatabase
  Roomsref: AngularFireList<RoomModel>
  guestdataRef:AngularFireList<GuestDataModel>
  cleaningref:AngularFireList<Cleaning>

  constructor(public db: AngularFireDatabase, public current: AngularFireAuth) {
    this.database = db
    this.Roomsref = db.list('/Rooms')
    this.guestdataRef= db.list('/GuestList')
    this.cleaningref=db.list('/CleaningDataList')
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
      id: number,
      length: number
    }>,
    SelectedRooms: RoomModel[],
    checkin: string,
    checkout: string
  }) {
    this.step2RoomData = object

  }
  RoomUpdaterCHECKIN(key: any, value: any, path: number) {
    return this.database.object('/Rooms/' + String(key) + '/RoomCheckinDate').update({ [path]: value })
  }
  RoomUpdaterCHECKOUT(key: any, value: any, path: number) {
    return this.database.object('/Rooms/' + String(key) + '/RoomCheckoutDate').update({ [path]: value })
  }

  RoomUpdaterIDhistory(key: any, value: any, path: number) {
    return this.database.object('/Rooms/' + String(key) + '/guestHistoryID').update({ [path]: value })
  }

  currentEmail() {
   return this.current.currentUser
  }


  currentEmailrelatedData(email:string){
    return this.guestdataRef.snapshotChanges().pipe(map(changes => changes.map(r => ({ id: r.payload.key, ...r.payload.val() }))))
  }
  cleaningImporter(){
    return this.cleaningref
  }
  cleaningRemover(key){
    return this.cleaningref.remove(key)
  }
}


