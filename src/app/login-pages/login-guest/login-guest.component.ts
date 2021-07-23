import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { RoomModel } from 'src/app/Models/room-model';
import { DataImporterService } from 'src/app/Services/data-importer.service';
import { SignInUpService } from 'src/app/Services/sign-in-up.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InAppOperationsService } from 'src/app/Services/in-app-operations.service';

@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})
export class LoginGuestComponent implements OnInit {
  Rooms: RoomModel[]
  constructor(public InApp:InAppOperationsService,public signingIN: SignInUpService, public data: DataImporterService, public snackBar:MatSnackBar,public router:Router) { }
  dateNow = Date.parse(formatDate(new Date(), 'yyyy-MM-dd', 'en'))
  access: boolean
  dateobject: {
    checkin: string,
    checkout: string
  }
  invalid:boolean=false
  error:string

  ngOnInit(): void {
    localStorage.removeItem('Rid')
    this.InApp.RoomID=0

    this.data.RoomImporter().snapshotChanges()
      .pipe(map(changes => changes.map(r => ({ roomid: r.payload.key, ...r.payload.val() })))).subscribe(result => {

        this.Rooms = result;
        console.log(result);
      })
    console.log(this.dateNow);

  }

  dates(email: string) {

    let ind: number
    this.Rooms.find((a) => {
      if (a.guestHistoryID.includes(email)) {
        a.guestHistoryID.forEach((id, index) => {
          if (id == email) {
            ind = index
            this.dateobject = {
              checkin: a.RoomCheckinDate[ind],
              checkout: a.RoomCheckoutDate[ind]
            }
          }
        })
        this.comparing()
      }
    })
    return console.log(this.dateobject);
  }
  comparing() {
    if ((this.dateNow >= Date.parse(this.dateobject.checkin)) && (this.dateNow <= Date.parse(this.dateobject.checkout))) {
      this.access = true
    } else {
      this.access = false
    }
    console.log(this.access);
  }
  openSnackBar() {
    this.snackBar.open("you can't enter the your interface before the check in date nor after the checkout date", "Close");
  }

  onSubmit(form: NgForm) {
    this.dates(form.value.email)

    if (this.access) {
      this.signingIN.logginIn(form.value.email, form.value.guestpsw).then((data) => {
        console.log(data.user.email);
        this.router.navigate(['/guestinterface'])

      }).catch((err:Error) => {
        this.invalid=true
        console.log(err);
        console.log(err.message);
        this.error=err.message



      })
    } else {
      // alert("you can't enter the your interface before the check in date nor after the checkout date")
       this.openSnackBar()
       form.reset()
    }



    console.log(form.value.email);
    console.log(form.value.guestpsw);
  }

}
