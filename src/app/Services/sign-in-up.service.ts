import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { GuestDataModel } from '../Models/guest-data-model';


@Injectable({
  providedIn: 'root'
})
export class SignInUpService {
  database:AngularFireList<any>

  constructor(public auth : AngularFireAuth,public db: AngularFireDatabase) {
   /* db.database.ref('/').child('GuestList').child() */

  }
  signUp(email:string, password:any){
   return  this.auth.createUserWithEmailAndPassword(email, password)
  }
  GuestDataPusher(GuestData:GuestDataModel):any{
    return this.db.database.ref().child('GuestList').push(GuestData)
  }
loggingOut(){
  this.auth.signOut
}



}
