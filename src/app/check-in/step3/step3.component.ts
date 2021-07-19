import { Component, OnDestroy, OnInit } from '@angular/core';
import { GuestDataModel } from 'src/app/Models/guest-data-model';
import { RoomModel } from 'src/app/Models/room-model';
import { Step1data } from 'src/app/Models/step1data';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { SignInUpService } from 'src/app/Services/sign-in-up.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit, OnDestroy {
  //Initialization
           //placeholders for dataimporter data
           //step1
  step1GuestData: Step1data
          //step2
  step2RoomsData: {
    Roomids: Array<{id: number,length: number}>,
    SelectedRooms: RoomModel[],
    checkin: string,
    checkout: string
  }
  //another placeholder
  SelectedRooms: RoomModel[] = []
  //price counter
  sum: number = 0
//imgUrl
  imgURL: any
//final output
  finalGuestData = new GuestDataModel()




  constructor(private dataImporter: DataImporterService, private SignInUp: SignInUpService, public router:Router) {

  }
//getting data and putting img in their places
  ngOnInit(): void {

    this.GettingData()

    if (this.step1GuestData.Pic === "undefined") {
      this.imgURL = "https://firebasestorage.googleapis.com/v0/b/smarthotel-database.appspot.com/o/user-profile.svg?alt=media&token=a3567d4c-824e-4916-89a7-868bb3f361de"

    } else {
      this.imgURL = this.step1GuestData.Pic
    }

  }
//getting step1 and 2 data and calc
  GettingData() {
    this.step1GuestData = this.dataImporter.step1GuestData
    console.log(this.step1GuestData);
    this.step2RoomsData = this.dataImporter.step2RoomData
    this.SelectedRooms = this.step2RoomsData.SelectedRooms

    this.calc()

  }
  //calculating Sum
  calc(): number {
    this.SelectedRooms.forEach(element => {
      this.sum = this.sum + element.RoomPrice
    });
    return this.sum
  }
  //sign Up
  checkIN(email, password) {
    return this.SignInUp.signUp(email, password)




  }
  // this func is to put in the finished btn
  bigFunction() {
    //again
    this.GettingData()
    //setting each value into place
    this.finalGuestData.FirstName = this.step1GuestData.Firstname
    this.finalGuestData.LastName = this.step1GuestData.Lastname
    this.finalGuestData.Birthdate = this.step1GuestData.Birthdate
    this.finalGuestData.IDorPass = this.step1GuestData.IDorPass
    this.finalGuestData.Email = this.step1GuestData.Email
    this.finalGuestData.PhoneNumber = this.step1GuestData.PhoneNum
    this.finalGuestData.RoomidS = this.step2RoomsData.Roomids
    this.finalGuestData.checkin = this.step2RoomsData.checkin
    this.finalGuestData.checkout = this.step2RoomsData.checkout
    this.finalGuestData.Pic = this.imgURL
    this.finalGuestData.People = this.step1GuestData.people
    this.finalGuestData.Nights = this.step1GuestData.nights
    //just for testing
    console.log(this.finalGuestData);
    //checkin func
    this.checkIN(this.step1GuestData.Email, this.step1GuestData.Password).then(() => {
        //uploadta
         this.SignInUp.GuestDataPusher(this.finalGuestData)
    this.step2RoomsData.Roomids.forEach(element => {
      this.dataImporter.RoomUpdaterCHECKIN(element.id, this.finalGuestData.checkin, element.length)
      this.dataImporter.RoomUpdaterCHECKOUT(element.id, this.finalGuestData.checkout, element.length)
      this.dataImporter.RoomUpdaterIDhistory(element.id, this.finalGuestData.Email, element.length)
    });
    //logging out on signUp
    this.SignInUp.loggingOut()
    })



  }
  ngOnDestroy() {

  }

}






