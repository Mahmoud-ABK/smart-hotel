import { Component, OnInit } from '@angular/core';
import { GuestDataModel } from 'src/app/Models/guest-data-model';
import { RoomModel } from 'src/app/Models/room-model';
import { Step1data } from 'src/app/Models/step1data';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { SignInUpService } from 'src/app/Services/sign-in-up.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  step1GuestData: Step1data
  step2RoomsData: {
    Roomids: Array<{
      id:number,
      length:number
    }> ,
    SelectedRooms: RoomModel[],
    checkin: string,
    checkout: string
  }
  finalGuestData= new GuestDataModel()
  SelectedRooms: RoomModel[] =[
    /* {
      roomid:1,
      RoomCheckinDate : [],
      RoomCheckoutDate:[] ,
      RoomPrice:90,
      RoomTemperature: 1 ,
      Roomhumidity:1,
      RoomLighting:[false,false,false,false] ,
      WaterTempertaure:1,
      Gas:false,
      Fire:12 ,
      guestHistoryID:[],
      doorOpen:true,
      doorHistory:[]
    },
    {
      roomid:2,
      RoomCheckinDate : [],
      RoomCheckoutDate:[] ,
      RoomPrice:200,
      RoomTemperature: 1 ,
      Roomhumidity:1,
      RoomLighting:[false,false,false,false] ,
      WaterTempertaure:1,
      Gas:false,
      Fire:12 ,
      guestHistoryID:[],
      doorOpen:true,
      doorHistory:[]
    } */
  ]
  sum:number=0


  constructor(private dataImporter: DataImporterService, private SignInUp: SignInUpService) {

   }

  ngOnInit(): void {

      this.GettingData()

  }

  GettingData() {
    this.step1GuestData = this.dataImporter.step1GuestData
    console.log(this.step1GuestData);
  this.step2RoomsData = this.dataImporter.step2RoomData
  this.SelectedRooms = this.step2RoomsData.SelectedRooms

  this.calc()

  }
  calc():number{
      this.SelectedRooms.forEach(element => {
     this.sum = this.sum + element.RoomPrice
  });
  return this.sum
  }
  checkIN(email, password) {
    this.SignInUp.signUp(email, password).then(

    )




  }
  // this func is to put in the finished btn


  bigFunction() {
    this.GettingData()

    this.finalGuestData.FirstName = this.step1GuestData.Firstname
    this.finalGuestData.LastName = this.step1GuestData.Lastname
    this.finalGuestData.Birthdate = this.step1GuestData.Birthdate
    this.finalGuestData.IDorPass = this.step1GuestData.IDorPass
    this.finalGuestData.Email = this.step1GuestData.Email
    this.finalGuestData.PhoneNumber = this.step1GuestData.PhoneNum
    this.finalGuestData.RoomidS = this.step2RoomsData.Roomids
    this.finalGuestData.checkin = this.step2RoomsData.checkin
    this.finalGuestData.checkout = this.step2RoomsData.checkout
    this.finalGuestData.Pic = this.step1GuestData.Pic
    this.finalGuestData.People = this.step1GuestData.people
    this.finalGuestData.Nights = this.step1GuestData.nights
    console.log(this.finalGuestData);
    this.checkIN(this.step1GuestData.Email, this.step1GuestData.Password)
    this.SignInUp.GuestDataPusher(this.finalGuestData)
    this.step2RoomsData.Roomids.forEach(element => {
      this.dataImporter.RoomUpdaterCHECKIN(element.id, this.finalGuestData.checkin,element.length)
     this.dataImporter.RoomUpdaterCHECKOUT(element.id, this.finalGuestData.checkout,element.length)
      this.dataImporter.RoomUpdaterIDhistory(element.id, this.finalGuestData.Email,element.length)
    });

  }



}






