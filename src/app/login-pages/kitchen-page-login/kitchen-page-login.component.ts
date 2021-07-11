import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kitchen-page-login',
  templateUrl: './kitchen-page-login.component.html',
  styleUrls: ['./kitchen-page-login.component.css']
})
export class KitchenPageLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value.kitchenID);
    console.log(form.value.kitchenpsw);
  }

}
