import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataImporterService } from '../Services/data-importer.service';
import { InAppOperationsService } from '../Services/in-app-operations.service';
import { SignInUpService } from '../Services/sign-in-up.service';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.component.html',
  styleUrls: ['./guest-profile.component.css']
})
export class GuestProfileComponent implements OnInit {
  currentEmail: string
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
  rooms: Array<number>
  OutDate

  constructor(public loggingOutService: SignInUpService, public route: Router, public dataImporter: DataImporterService, public Tosettings: InAppOperationsService) { }

  ngOnInit(): void {

    this.dataImporter.currentEmail().then((data) => {
      this.currentEmail = data.email
      console.log(this.currentEmail);
      this.dataImporter.currentEmailrelatedData(this.currentEmail).subscribe((res) => {
        res.forEach((element) => {
          if (element.Email == this.currentEmail) {
            this.data = element
          }
        })
        console.log(this.data);
        localStorage.setItem('GuestData', JSON.stringify(this.data));
        this.rooms = this.data.RoomidS
        this.OutDate = this.data.checkout
        this.loggingOutService.finishedSession(this.data.checkin,this.data.checkout)

      })
    });
  }
  loggingOut() {
    this.loggingOutService.loggingOut()
  }
  ToRoomSettings(id: number) {
    localStorage.removeItem('door')
    localStorage.removeItem('doorStat')
    localStorage.removeItem('Rid')
    this.Tosettings.RoomID = 0
    this.Tosettings.IDtransmitter(id)
    this.Tosettings.currentDataTransmitter(this.data)

    this.route.navigate(['roomsettings', 'roomcontrol'])
  }
}
