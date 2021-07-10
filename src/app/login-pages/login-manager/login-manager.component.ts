import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit(form: NgForm){
    console.log(form.value.email);
    console.log(form.value.managerpsw);
  }

}
