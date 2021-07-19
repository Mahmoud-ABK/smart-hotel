import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { GuestDataModel } from '../Models/guest-data-model';


@Injectable({
  providedIn: 'root'
})
export class SignInUpService {
  database:AngularFireList<any>

  constructor(public auth : AngularFireAuth,public db: AngularFireDatabase , public router:Router) {
   /* db.database.ref('/').child('GuestList').child() */

  }
  signUp(email:string, password:any){
   return  this.auth.createUserWithEmailAndPassword(email, password)
  }
  GuestDataPusher(GuestData:GuestDataModel):any{
    return this.db.database.ref().child('GuestList').push(GuestData)
  }
loggingOut(){
  localStorage.removeItem('door')
  localStorage.removeItem('doorStat')
  localStorage.removeItem("Rid");
  localStorage.removeItem("GuestData");
  return this.auth.signOut().then(() => {
    this.router.navigate(['/guestlogin'])
  })
}
logginIn(email:string,password:string){
  return this.auth.signInWithEmailAndPassword(email,password)
}
passEmail(a){
  return this.auth.sendPasswordResetEmail(a)
}


}
