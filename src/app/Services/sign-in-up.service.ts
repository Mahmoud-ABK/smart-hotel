import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { GuestDataModel } from '../Models/guest-data-model';
import { InAppOperationsService } from './in-app-operations.service';


import * as firebase from 'firebase';

import { FirebaseApp } from '@angular/fire';
import { DataImporterService } from './data-importer.service';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class SignInUpService {
  database: AngularFireList<any>
  currentGuests: string[]

  constructor(public auth: AngularFireAuth, public db: AngularFireDatabase, public router: Router, public InApp: InAppOperationsService, public data: DataImporterService) {
    /* db.database.ref('/').child('GuestList').child() */

    data.currents().snapshotChanges().pipe(map(changes => changes.map(r => (r.payload.val())))).subscribe((res) => {
      this.currentGuests = res


    })
  }
  signUp(email: string, password: any) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }
  GuestDataPusher(GuestData: GuestDataModel,id:any): any {
    return this.db.database.ref().child('GuestList').update({[id]:GuestData})
  }
  pusherToCurrentGuests(email) {
    return this.db.object('/CurrentGuests').update({ [this.currentGuests.length]: email })
  }
  DeletorFromCurrentGuests(email) {
    this.currentGuests.forEach((element, index) => {
      if (element === email) {
        this.currentGuests.splice(index, 1)
      }
    });
    return this.db.object('/').update({ CurrentGuests: this.currentGuests })
  }
  loggingOut() {
    /* localStorage.removeItem('door')
    localStorage.removeItem('doorStat')
    localStorage.removeItem("Rid");
    localStorage.removeItem("GuestData"); */
    localStorage.clear()
    return this.auth.signOut().then(() => {
      this.router.navigate(['/guestlogin'])
    })
  }
  logginIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }
  passEmail(a) {
    return this.auth.sendPasswordResetEmail(a)
  }

  accDeletion(email: string, pass: string, error: any, invalid: boolean) {
    const guestProfile = firebase.default.auth.EmailAuthProvider.credential(email, pass)
    return firebase.default.auth().currentUser.reauthenticateWithCredential(guestProfile).then(() => {
      console.log('did');
      firebase.default.auth().currentUser.delete().then(() => {
        localStorage.clear()
        this.router.navigate(['']).then(() => {
          localStorage.clear()
          this.InApp.Snackbar.open('Account Deleted', '', {
            duration: 3000
          })
        })})                                 .catch(() => {

        this.InApp.Snackbar.open('error occured', '', {
          duration: 3000
        })
      })
    }).catch((err) => {
      invalid = true
      error = err.message
      this.InApp.Snackbar.open(err.message, '', {
        duration: 3000
      })
      console.log('didnt');
    })




  }
  finishedSession(checkin, checkout) {
    let todaysdate = Date.now()
    let In = Date.parse(checkin)
    let Out = Date.parse(checkout)
    if (todaysdate >= Out) {
      this.router.navigate(['/checkingout']).then(() => {
        this.InApp.Snackbar.open('check out Date has come', '', {
          duration: 3000
        })

      })
    }

  }
}


