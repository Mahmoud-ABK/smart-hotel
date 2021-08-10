import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { Cleaning } from 'src/app/Models/cleaning.model';
import { GuestDataModel } from 'src/app/Models/guest-data-model';
import { InAppOperationsService } from 'src/app/Services/in-app-operations.service';

@Component({
  selector: 'app-room-services',
  templateUrl: './room-services.component.html',
  styleUrls: ['./room-services.component.css']
})
export class RoomServicesComponent implements OnInit, OnDestroy {
  disable: boolean
  id: any
  todaysDate = formatDate(new Date(), 'yyyy-MM-ddThh:mm a', 'en');
  Cdata: Cleaning = new Cleaning()
  data:GuestDataModel

  constructor(public router: Router, public thisroute: ActivatedRoute, public inApp: InAppOperationsService, public snackBar: MatSnackBar) {
    this.inApp.RoomID=+localStorage.getItem('Rid')
    console.log(this.todaysDate);
    this.id = inApp.RoomID
    this.data=JSON.parse(localStorage.getItem('GuestData'))

  }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    console.log(this.inApp.RoomID);
    console.log(String(form.value.cleaningDateTime));
    console.log(String(form.value.cleaningDateTime).split('T')[0]);
    console.log(String(form.value.cleaningDateTime).split('T')[1]);
    this.Cdata.roomid = this.inApp.RoomID
    this.Cdata.date = String(form.value.cleaningDateTime).split('T')[0]
    this.Cdata.time = String(form.value.cleaningDateTime).split('T')[1]
    this.Cdata.name=this.data.FirstName+' '+this.data.LastName
    this.Cdata.number=this.data.PhoneNumber
    this.Cdata.email=this.data.Email
    this.inApp.ToArchive('Cleaning',this.inApp.RoomID,this.Cdata)
    this.cleaningDataSender(this.Cdata)
  }
  OpeningSnackBar() {
    this.snackBar.open('Data Sent', '', {
      duration: 2000
    })
  }
  cleaningDataSender(CleanData: Cleaning) {
    this.inApp.multiPusher('/CleaningDataList', CleanData, 'Cleaning Data Sent')
  }
  ToFoodmenu() {
    this.router.navigate(['/foodmenu'])
  }
  ngOnDestroy() {
    this.inApp.RoomID = this.id
    console.log(this.inApp.RoomID);

  }
}
