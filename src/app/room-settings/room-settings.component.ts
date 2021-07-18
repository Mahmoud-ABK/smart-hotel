
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataImporterService } from '../Services/data-importer.service';
import { InAppOperationsService } from '../Services/in-app-operations.service';
import { SignInUpService } from '../Services/sign-in-up.service';

@Component({
  selector: 'app-room-settings',
  templateUrl: './room-settings.component.html',
  styleUrls: ['./room-settings.component.css']
})
export class RoomSettingsComponent implements OnInit , OnDestroy{
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

  constructor(private router:Router,public loggingOut:SignInUpService,public Logindata:InAppOperationsService ,public dataImporter:DataImporterService) {
    this.dataImporter.currentEmail().then((data) => {
      data.email

      this.dataImporter.currentEmailrelatedData(data.email).subscribe((res) => {
        res.forEach((element) => {
          if (element.Email == data.email) {
            this.data = element

          }
        })
        console.log(this.data);

      })
    });
   }

  ngOnInit(): void {
  }
  onReport(){
    this.router.navigate(["/guestinterface"]);
  }
  onLogout(){
    this.loggingOut.loggingOut()
  }
  ngOnDestroy(){
    this.Logindata.RoomID= this.Logindata.RoomID
  }
}
