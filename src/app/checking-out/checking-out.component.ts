import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RoomModel } from '../Models/room-model';
import { DataImporterService } from '../Services/data-importer.service';
import { InAppOperationsService } from '../Services/in-app-operations.service';
import { SignInUpService } from '../Services/sign-in-up.service';

@Component({
  selector: 'app-checking-out',
  templateUrl: './checking-out.component.html',
  styleUrls: ['./checking-out.component.css']
})
export class CheckingOutComponent implements OnInit {
  noEmail = false
firebase

  constructor(public InApp: InAppOperationsService, public signingIN: SignInUpService, public data: DataImporterService, public snackBar: MatSnackBar, public router: Router) {
  }

  invalid: boolean = false
  error: string

  ngOnInit(): void {

  }


  onSubmit(form: NgForm) {
    this.signingIN.accDeletion(form.value.email,form.value.guestpsw,this.error,this.invalid).then(() => {
      this.signingIN.DeletorFromCurrentGuests(form.value.email)
    })

  }
  forgetpswMiniFunction(email: boolean, emailval) {
    if (!email) {
      this.noEmail = true
    } else {
      this.noEmail = false
     this.signingIN.passEmail(emailval).then(() => {
       this.InApp.Snackbar.open('reset email sent to your inbox !','close',{
         duration:3000,
       })
     }).catch(() => {
      this.InApp.Snackbar.open('error occured !','close',{
        duration:3000,
      })
     })

    }

  }

}
