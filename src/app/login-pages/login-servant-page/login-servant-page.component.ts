import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-servant-page',
  templateUrl: './login-servant-page.component.html',
  styleUrls: ['./login-servant-page.component.css']
})
export class LoginServantPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value.email);
    console.log(form.value.servantpsw);
  }

}
