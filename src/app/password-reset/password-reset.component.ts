import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignInUpService } from '../Services/sign-in-up.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(public service:SignInUpService ,public snackBar:MatSnackBar,public router:Router) { }

  ngOnInit(): void {
  }
  openSnackBar() {
    this.snackBar.open("Email Sent ! ", "Close",{
      duration:3000
    });
  }
  onSubmit(form: NgForm){

    this.service.passEmail(form.value.email).then(() =>
    {this.openSnackBar()
      const a = setTimeout(() => {
          this.router.navigate(['/guestlogin'])
      },3000)
    })

  }

}
