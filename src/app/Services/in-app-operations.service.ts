import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

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
  updating(key: any, tem: number, h: number, light: boolean[], w: number) {
    return this.db.object('/Rooms/' + String(key)).update({
      RoomTemperature: tem,
      Roomhumidity: h,
      RoomLighting: light,
      WaterTempertaure: w
    })
  }
  doorStatusUpdater(id, val) {
    return this.db.object('/Rooms/' + String(id)).update({ doorOpen: val })
  }
  doorhisoryUpdater(id, val) {
    return this.db.list('/Rooms/' + String(id) + '/doorHistory').push(val)
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
      this.Snackbar.open(snackbarMsg, '', {
        duration: 2500
      })
    })
  }

}
