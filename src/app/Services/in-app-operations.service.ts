import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { Cleaning } from '../Models/cleaning.model';
import { FoodOrderModel } from '../Models/food-order-model';

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
  database: AngularFireDatabase

  constructor(public db: AngularFireDatabase, public Snackbar: MatSnackBar) {

  }
  IDtransmitter(id: number) {
    this.RoomID = id
    console.log(this.RoomID);
    localStorage.setItem('Rid',id.toString())



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
  updating(key: any, tem: number, h: number, light: any[], w: number) {
    return this.db.object('/Rooms/' + String(key)).update({
      RoomTemperature: tem,
      Roomhumidity: h,
      RoomLighting: light,
      WaterTempertaure: w
    })
  }
  updatingPerPart(key: any, name: string, val: any ) {
    return this.db.object('/Rooms/' + String(key)).update({
      [name]:val
    })
  }

  updatingRoomTemp(key: any, tem: number ) {
    return this.db.object('/Rooms/' + String(key)).update({
      RoomTemperature: tem,
    })
  }
  updatingRoomhum(key: any, h: number) {
    return this.db.object('/Rooms/' + String(key)).update({
      Roomhumidity: h
    })
  }
  updatingRoomLighting(key: any, tem: number, h: number, light: string[], w: number) {
    return this.db.object('/Rooms/' + String(key)).update({
      RoomLighting: light,
    })
  }
  updatingWaterTemp(key: any, w: number) {
    return this.db.object('/Rooms/' + String(key)).update({
      WaterTempertaure: w
    })
  }
  doorStatusUpdater(id, val) {
    return this.db.object('/Rooms/' + String(id)).update({ doorOpen: val })
  }
  doorhisoryUpdater(id, val) {
    return this.db.list('/Rooms/' + String(id) + '/doorHistory').push(val)
  }
  doorhisoryArchiveUpdater(id, val) {
    return this.db.list('/Rooms/' + String(id) + '/doorHistoryArchive').push(val)
  }
  doorHistoryImporter(key: number) {
    var firelist: AngularFireList<{ action: string, time: string }>
    firelist = this.db
      .list('/Rooms/' + String(key) + '/doorHistory')
    return firelist
      .snapshotChanges()
      .pipe(map((changes => changes.map(r => ({ key: r.payload.key, ...r.payload.val() })))))

  }
  // NG ON DESTROY TO STORE ID IN EVERY COMPO

  /*  multiPusher(path:string,val:any){
     return this.db.database.ref().child(path).push(val)
   } */
  multiPusher(path: string, val: any, snackbarMsg: string) {
    return this.db.list(path).push(val).then(() => {
      this.Snackbar.open(snackbarMsg, 'Close', {
        duration: 2500 ,  panelClass:"uploadedsnackbar"
      })
    })
  }
  ToArchive(pathfromArchive:string,roomid:number,val:Cleaning | FoodOrderModel){
    return this.db.list('Archive/'+pathfromArchive).push(val)

  }

}
