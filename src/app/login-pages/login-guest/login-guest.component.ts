import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-guest',
  templateUrl: './login-guest.component.html',
  styleUrls: ['./login-guest.component.css']
})
export class LoginGuestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value.email);
    console.log(form.value.guestpsw);
  }

}
